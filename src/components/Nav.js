import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TodoContext } from '../context/TodoContext';

const Nav = () => {
  const { isLoggedin } = useContext(TodoContext);
  return (
    <nav>
      <Link to="/">Home</Link> <Link to="/todo">TODO</Link>{' '}
      <Link to="/counter">COUNTER</Link>{' '}
      {isLoggedin && <Link to="/logout"> Logout</Link>}
    </nav>
  );
};

export default Nav;
