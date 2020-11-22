// will contain the amazon header or navbar type thing
import React from 'react'
// import the searchIcon from materialui
import SearchIcon from '@material-ui/icons/Search';
// import the shoppig basket icon from material ui
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';  
import './Header.css';

function Header() {
    return (
        <div className="header "> 
             <img className="header__logo" src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
             <div className="header__search">
                 <input className="header__searchInput" type="text" />
                 <SearchIcon className="header__searchIcon"/>
                 
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
                <div className="header__optionBasket">
                  <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount" >0 </span>
                    </div>
             </div>
        </div>
    )
}

export default Header
