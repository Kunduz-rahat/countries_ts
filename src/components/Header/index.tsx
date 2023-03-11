import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';
const Header = () => {
  return (
    <header className="header">
      <Link to={'/'}>
      <h1>Where in the World?</h1></Link>
     
      <p>Dark Mode</p>
    </header>
  );
};

export default Header;
