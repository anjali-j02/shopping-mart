import React from 'react';

import {
  Search as SearchIcon,
  ShoppingBasket as BasketIcon,
} from '@mui/icons-material';

import '../Styles/Header.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="header">
      <h1 className="header__logo">Miler</h1>

      <div className="header__section">
        <h4 className="header__sectionOption">MEN</h4>
        <h4 className="header__sectionOption">WOMEN</h4>
        <h4 className="header__sectionOption">KIDS</h4>
      </div>

      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search..."
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>

      <Link to={'/cart'}>
        <div className="header__optionBasket">
          <BasketIcon />
          <span className="header__optionLineTwo header__basketCount">0</span>
        </div>
      </Link>
    </div>
  );
};
export default Navbar;
