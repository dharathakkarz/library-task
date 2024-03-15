import React from 'react';
import { Link } from 'react-router-dom'; 

const AdminDashboard = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
    <div className="bg-light p-4 rounded">
      <h2 className="mb-4 text-dark text-center">Admin Dashboard</h2>
      <div className="row justify-content-center">
      <div className="col-lg-12 mb-4">
          <div className="card bg-light">
            <div className="card-body">
              <h5 className="card-title">Manage Authors</h5>
              <p className="card-text">View and manage Authors in the library.</p>
              <Link to="/manage-authors" className="btn btn-primary ">Go to Authors</Link> 
            </div>
          </div>
        </div>
        <div className="col-lg-12 mb-4">
          <div className="card bg-light">
            <div className="card-body">
              <h5 className="card-title">Manage Books</h5>
              <p className="card-text">View and manage books in the library.</p>
              <Link to="/manage-books" className="btn btn-primary ">Go to Books</Link> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AdminDashboard;
