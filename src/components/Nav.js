import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to="/todo">TODO</Link> <Link to="/counter">COUNTER</Link>
    </nav>
  );
};

export default Nav;
