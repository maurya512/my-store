import React, { useEffect } from 'react';
import './App.css';
// import the header tag from Header.js
import Header from './Header';
// import the home tag from Home.js
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('The user is ' + authUser);
      if(authUser) {
        // the user just logged in
        dispatch({
          // set the user to whoever was logged in using firebase 
          type: 'SET_USER',
          user: authUser
        })
      } else {
      dispatch({
        type: 'SET_USER',
        user: null
      })
    }
    })
  }, [])

  return (
    // bem convention
    <Router>
    <div className="app">
      {/* header always gets rendered */}
      <Switch>
        {/* Login route */}
        <Route path='/login'>
          <Login />
          {/* Login component */}
        </Route>
        {/* checkout path  */}
        <Route path='/checkout'>
          {/* checkout component */}
          <Header />
          <Checkout />
        </Route>
        <Route path='/payment'>
          <Header />
          <Payment />
        </Route>
        {/* default route always stays at the bottom as that's the last case scenario */}
        {/* a default route when a designated path isn't hit */}
        {/* Home page route */}
        <Route path='/'>
          <Header/>
        <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
