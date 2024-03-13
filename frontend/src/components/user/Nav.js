// import React ,{useState}from 'react';
// import { Link, useNavigate } from 'react-router-dom'; 
// import {useSelector,useDispatch} from 'react-redux'
// import { logoutUser } from '../../redux/actions/user/userAction';
// import { searchBook, setSearchTerm } from '../../redux/actions/books/bookAction'

// const Nav = (props) => {

//   const state = useSelector(state => state.userlogin)
//   const navigate = useNavigate();
//   const dispatch = useDispatch()
//   const [searchTermLocal, setSearchTermLocal] = useState('');

//   const logoutHandler = async () => {
   
//     await dispatch(logoutUser()); //for logout
//     navigate('/'); // Navigate to the home page
//     console.log('logout done');
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     dispatch(searchBook(searchTermLocal));
//   };

//   const handleSearchTermChange = (e) => {
//     setSearchTermLocal(e.target.value);
//     dispatch(setSearchTerm(e.target.value));
//   };


//   return (
//     <div>
//       <nav className="navbar bg-body-tertiary">
//         <div className="container-fluid">
//           <a href="/" className="navbar-brand">Library Management</a>
//           <ul className="nav">
//           <li className="nav-item">
//               <Link className="nav-link" to='/home'>Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to='/book'>Books</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to='/login'>Login</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" onClick={logoutHandler}>Logout</Link>
//             </li>
           
//           </ul>
//           <form className="d-flex" role="search" onSubmit={handleSearch} >
//             <input className="form-control me-2" type="search" placeholder="Search"  value={searchTermLocal}
//               onChange={handleSearchTermChange}  aria-label="Search"/>
//             <button className="btn btn-outline-success" type="submit">Search</button>
//           </form>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Nav;//1st 


// Navbar.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            Library Management
          </a>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/book">
                Books
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" onClick={logoutHandler}>
                Logout
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/post">
                Create a Post
              </Link>
            </li>
          </ul>
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
