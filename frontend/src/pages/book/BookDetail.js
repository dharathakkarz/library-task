import React from 'react';
import { useLocation } from 'react-router-dom';

const BookDetail = () => {
  const location = useLocation();
  const { book } = location.state || {}; // Handle null state

  if (!book) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Description: {book.description}</p>
      <p>Price: {book.price}</p>
      <p>Author: {book.author}</p>
   
    </div>
  );
};

export default BookDetail;
