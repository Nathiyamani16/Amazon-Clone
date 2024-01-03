import React from "react"
import './header.scss';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return(
    <header className="header">
      <div className="header__logo">
        <AddBusinessIcon fontSize="large"/>&nbsp;
        <span className="header__logoName">NexGenSource</span>
      </div>
      <div className="header__search">
        <input />
        <SearchIcon fontSize="small" className="header__searchIcon"/>
      </div>
      <div className="header__nav">
        <div className="header__nav__user">
          <span className="header__nav__lineOne">Hello Guest</span>
          <span className="header__nav__lineTwo">Sign In</span>
        </div>
        <div className="header__nav__itemBasket">
          <ShoppingCartIcon fontSize="small"/>&nbsp;Cart
        </div>
      </div>
    </header>
  )
}

export default Header;