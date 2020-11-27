import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    // two local states which keeps track of the values typed in the textboxes
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const createID = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                console.log(auth);
                // once user creates an account redirect them to the main page
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            {/* link back to the home page */}
            <Link to='/'>
                {/* amazon logo */}
                <img className='login__logo' src='https://digistatement.com/wp-content/uploads/2020/01/Amazon-logo.jpg' alt='amazon logo' />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    {/* whenever the value of the textboxes change, we change the value of state */}
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                </form>
                <form>
                    <h5>Password</h5>
                    {/* crypts the password */}
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    {/* button to login */}
                    <button
                        type='submit'
                        onClick={logIn} className="login__Button">Sign In</button>
                </form>
                <p>
                    Terms and Conditions of the amazon fake clone website.
                </p>
                {/* button to create an accout */}
                <button
                    onClick={createID}
                    type='submit'
                    className="signup__Button">Create an Account</button>
            </div>
        </div>
    )
}

export default Login;
