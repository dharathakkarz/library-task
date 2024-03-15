import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar/NavBar';

const Home = () => {
  const backgroundImageUrl = 'https://www.pixel-studios.com/blog/wp-content/uploads/2018/12/012-1200x600.jpg';

  return (
    <>
    <Navbar/>
    <div className="bg-image" style={{ 
     backgroundImage: `url(${backgroundImageUrl})`,
     backgroundSize: 'cover',
     backgroundPosition: 'center',
     minHeight: '100vh',
     position: 'relative',  
    }}>
      <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
              display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className="container text-center text-white">
            <h1 className="display-4">Welcome to the Library Management App</h1>
            <p className="lead">Explore our collection and manage your library efficiently.</p>
            <Link to="/register" className="btn btn-primary btn-lg">
              View Books
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
