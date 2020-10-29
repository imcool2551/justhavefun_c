import React, { useEffect, useContext } from 'react';
import axios from 'axios';

import { TodoContext } from '../context/TodoContext';

const Logout = ({ history }) => {
  const { logOut } = useContext(TodoContext);
  useEffect(() => {
    axios
      .post('/auth/logout')
      .then((res) => {
        console.log(res);
        logOut();
        history.replace('/');
      })
      .catch((err) => {
        console.log(err.response);
      })
      .then(() => {
        history.replace('/');
      });
  }, []);
  return <div />;
};

export default Logout;
