
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/actions/user/UserAction';

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
 

  const logoutHandler = async () => {
    await dispatch(logoutUser());
    navigate('/');
    console.log('Logout done');
  };



  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            Library Management
          </a>
          <div className="d-flex">
          <button className="btn btn-dark me-2" onClick={() => navigate('/home')}>
             Home
            </button>
            <button className="btn btn-dark me-2" onClick={() => navigate('/book')}>
              Book
            </button>
            <button className="btn btn-dark me-2" onClick={() => navigate('/login')}>
              Login
            </button>
            <button className="btn btn-dark me-2" onClick={logoutHandler}>
              Logout
            </button>
            <button className="btn btn-dark me-2" onClick={() => navigate('/post')}>
              Create a Post
            </button>
          </div>
         
        </div>
      </nav>
    </div>
  );
};

export default Nav;