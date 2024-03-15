
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/actions/user/userAction';
import { searchBook, setSearchTerm } from '../../redux/actions/books/bookAction';

const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTermLocal, setSearchTermLocal] = useState('');

  const logoutHandler = async () => {
    await dispatch(logoutUser());
    navigate('/');
    console.log('Logout done');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchBook(searchTermLocal));
  };

  const handleSearchTermChange = (e) => {
    setSearchTermLocal(e.target.value);
    dispatch(setSearchTerm(e.target.value));
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
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              value={searchTermLocal}
              onChange={handleSearchTermChange}
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Nav;