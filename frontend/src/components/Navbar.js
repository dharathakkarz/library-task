import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">Library Management</a>
          <ul className="nav">
          <li className="nav-item">
              <Link className="nav-link" to='/home'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/book'>Books</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/register'>Signup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/login'>Login</Link>
            </li>
          </ul>
     
        </div>
      </nav>
    </div>
  );
};

export default Navbar;