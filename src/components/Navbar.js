import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-primary mb-3">
      <div className="container">
        <Link to="/">
          <p className="navbar-brand">LAB - WikiCountries</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
