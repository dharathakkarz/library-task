// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
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
//               <Link className="nav-link" to='/register'>Signup</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to='/login'>Login</Link>
//             </li>
//           </ul>
          
     
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">Library Management</a>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary mx-2">
              <Link className="nav-link" to='/home'>Home</Link>
            </button>
         
            <button className="btn btn-primary mx-2">
              <Link className="nav-link" to='/register'>Signup</Link>
            </button>
            <button className="btn btn-primary mx-2">
              <Link className="nav-link" to='/login'>Login</Link>
            </button>
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn  btn-primary mx-2">
              <Link className="nav-link" to='/admin'>Admin</Link> {/* Add Admin link */}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
