// will contain the amazon header or navbar type thing
import React from 'react'
// import the searchIcon from materialui
import SearchIcon from '@material-ui/icons/Search';
// import the shoppig basket icon from material ui
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import './Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{cart}, dispatch] = useStateValue();
    return (
        <div className="header ">
            <Link to="/">
                <img className="header__logo" src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' alt="store logo"/>
            </Link>
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />

                {/* Logo */}
            </div>

            <div className="header__nav">
                {/* options are the ones that have hello sign in, cart and such */}
                <div className="header__option">
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">Sign In</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
                {/* to add a cart logo for the  */}
                {/* add link to the shopping cart page */}
                <Link to='/checkout'>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount" >
                            {/* optional chaining */}
                            {cart?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
