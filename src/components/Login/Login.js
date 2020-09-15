import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch((error) => error.message);
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // ? it successfully created a new user with email and password
        if (auth) {
          history.push('/');
        }
      })
      .catch((error) => alert(error.message));

    // ! do some fancy firebase register shittt....
  };

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
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h5>Password</h5>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className='login_singInButton'
              type='submit'
              onClick={signIn}
            >
              Sign In
            </button>
          </form>

          <p>
            By singing-in you agree to Amazon's Conditions of Use & Scale.
            Please see our Privacy Notice, our Cokies Notice and our
            Internest-Based Ads
          </p>
          <button className='login_registerButton' onClick={register}>
            Create your Amazon Account
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
