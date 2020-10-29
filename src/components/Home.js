/* eslint-disable camelcase */
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import useInput from '../hooks/useInput';
import { TodoContext } from '../context/TodoContext';

const Home = () => {
  const email = useInput('');
  const password = useInput('');
  const [errorMsg, setErrorMsg] = useState('');
  const { isLoggedin, username, logIn, logOut } = useContext(TodoContext);

  useEffect(() => {
    axios('/auth/login_check').then(({ data }) => {
      if (data.isLoggedin) {
        logIn(data.displayName);
      } else {
        logOut();
      }
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/auth/login', {
        email: email.value,
        password: password.value,
      })
      .then(({ data }) => {
        console.log(data);
        const { success, displayName } = data;
        if (success) {
          logIn(displayName);
        }
      })
      .catch((err) => {
        console.log(err.response);
        const {
          response: {
            data: { error_msg },
          },
        } = err;
        setErrorMsg(error_msg[0]);
      });
  };

  if (isLoggedin) {
    return <h1>Welcome, {username}</h1>;
  }
  return (
    <>
      <h3>{errorMsg}</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" placeholder="Email..." {...email} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password..."
            {...password}
          />
        </div>
        <div>
          <button>Log In</button>
        </div>
      </form>
      <div>
        <a href="http://localhost:5000/auth/google">Google Login</a>
      </div>
      <div>
        <Link to="/signup">Signup</Link>
      </div>
    </>
  );
};

export default Home;
