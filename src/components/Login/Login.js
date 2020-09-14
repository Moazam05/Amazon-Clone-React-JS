import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <div className='login'>
        <Link to='/'>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
            alt=''
            className='login_logo'
          />
        </Link>

        <div className='login_container'>
          <h1>Sign-in</h1>
          <form>
            <h5>E-mail</h5>
            <input type='text' />
            <h5>Password</h5>
            <input type='password' />
            <button className='login_singInButton'>Sign In</button>
          </form>

          <p>
            By singing-in you agree to Amazon's Conditions of Use & Scale.
            Please see our Privacy Notice, our Cokies Notice and our
            Internest-Based Ads
          </p>
          <button className='login_registerButton'>
            Create your Amazon Account
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
