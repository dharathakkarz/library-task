


import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark position-absolute w-100" style={{ zIndex: 1 }}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Library Management</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item font-weight-bold">
              <button className="nav-link btn btn-primary" onClick={() => window.location.href = "/home"}>Home</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-primary" onClick={() => window.location.href = "/register"}>Signup</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-primary" onClick={() => window.location.href = "/login"}>Login</button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-primary" onClick={() => window.location.href = "/admin"}>Admin</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;