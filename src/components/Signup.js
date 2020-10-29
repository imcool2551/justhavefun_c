/* eslint-disable camelcase */
import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import useInput from '../hooks/useInput';
import { TodoContext } from '../context/TodoContext';

const Signup = () => {
  const email = useInput('');
  const password = useInput('');
  const password2 = useInput('');
  const displayName = useInput('');
  const [errorMsg, setErrorMsg] = useState('');
  const { isLoggedin, logIn, logOut } = useContext(TodoContext);

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
    if (password.value === password2.value) {
      axios
        .post('/auth/signup', {
          email: email.value,
          password: password.value,
          displayName: displayName.value,
        })
        .then(({ data }) => {
          console.log(data);
          const { success } = data;
          if (success) {
            logIn(data.displayName);
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
    } else {
      setErrorMsg('Password does not match!');
    }
  };

  return (
    <>
      {isLoggedin && (
        <Redirect
          to={{
            pathname: '/',
          }}
        />
      )}
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
          <label htmlFor="password2">Password:</label>
          <input
            type="password"
            name="password2"
            placeholder="Validate Password..."
            {...password2}
          />
        </div>
        <div>
          <label htmlFor="password">Display Name:</label>
          <input
            type="text"
            name="displayName"
            placeholder="DisplayName..."
            {...displayName}
          />
        </div>
        <div>
          <button>Sign up</button>
        </div>
      </form>
    </>
  );
};

export default Signup;
