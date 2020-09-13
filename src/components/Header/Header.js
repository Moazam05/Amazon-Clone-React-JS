import React from 'react';
import './Header.css';

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
  return (
    <>
      <div className='header'>
        <img
          src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'
          alt='Company Logo'
          className='header_logo'
        />

        <div className='header_search'>
          <input className='header_searchInput' type='text' />
          <SearchIcon className='header_searchIcon' />
        </div>

        <div className='header_nav'>
          {/* Opiton 1 */}
          <div className='header_option'>
            <span className='header_optionOne'>Hello Guest</span>
            <span className='header_optionTwo'>Sing In</span>
          </div>
          {/* Opiton 2 */}
          <div className='header_option'>
            <span className='header_optionOne'>Return</span>
            <span className='header_optionTwo'>& Orders</span>
          </div>
          {/* Opiton 3  */}
          <div className='header_option'>
            <span className='header_optionOne'>Your</span>
            <span className='header_optionTwo'>Prime</span>
          </div>
          <div className='header_optionBasket'>
            <ShoppingBasketIcon />
            <span className='header_optionTwo header_basketCount'>0</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
