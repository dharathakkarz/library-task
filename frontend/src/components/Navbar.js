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

//=============chatgpt
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = ({ isLoggedIn }) => {
//   return (
//     <div>
//       <nav className="navbar bg-body-tertiary">
//         <div className="container-fluid">
//           <a href="/" className="navbar-brand">Library Management</a>
//           <ul className="nav">
//             <li className="nav-item">
//               <Link className="nav-link" to='/home'>Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to='/book'>Books</Link>
//             </li>
//             {isLoggedIn ? (
//               <>
//                 {/* Render links for logged-in user */}
//                 <li className="nav-item">
//                   <Link className="nav-link" to='/profile'>Profile</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to='/logout'>Logout</Link>
//                 </li>
//               </>
//             ) : (
//               <>
//                 {/* Render links for non-logged-in user */}
//                 <li className="nav-item">
//                   <Link className="nav-link" to='/register'>Signup</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to='/login'>Login</Link>
//                 </li>
//               </>
//             )}
//           </ul>
//           <form className="d-flex" role="search">
//             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//             <button className="btn btn-outline-success" type="submit">Search</button>
//           </form>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
