import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { auth } from 'firebase';

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../ContextAPI/StateProvider';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <>
      <div className='header'>
        <Link to='/'>
          <img
            src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'
            alt='Company Logo'
            className='header_logo'
          />
        </Link>

        <div className='header_search'>
          <input className='header_searchInput' type='text' />
          <SearchIcon className='header_searchIcon' />
        </div>

        <div className='header_nav'>
          {/* Opiton 1 */}
          <Link to='/login'>
            <div onClick={handleAuthentication} className='header_option'>
              <span className='header_optionOne'>Hello Guest</span>
              <span className='header_optionTwo'>
                {user ? 'Sign Out' : 'Sign In'}
              </span>
            </div>
          </Link>
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
          <Link to='/checkout'>
            <div className='header_optionBasket'>
              <ShoppingBasketIcon />
              <span className='header_optionTwo header_basketCount'>
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
