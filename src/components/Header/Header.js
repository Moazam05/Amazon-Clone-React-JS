import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';

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
            <span className='header_optionTwo'>Hello Singin</span>
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
          {/* <div className='header_option'></div> */}
        </div>
      </div>
    </>
  );
}

export default Header;
