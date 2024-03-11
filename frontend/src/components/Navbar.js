import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">Library Management</a>
          <ul className="nav">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/books" className="nav-link">Books</a>
            </li>
            <li className="nav-item">
              <a href="/admin" className="nav-link">Admin</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
