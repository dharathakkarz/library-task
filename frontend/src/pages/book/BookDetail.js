import React, { useEffect, useState } from 'react';
import { fetchSingleBook } from '../../redux/actions/books/BookAction'; // Import your API function

const BookDetail = ({ bookId }) => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBookDetails = async () => {
      try {
        setLoading(true);
        const bookData = await fetchSingleBook(bookId);
        setBook(bookData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getBookDetails();
  }, [bookId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!book) {
    return <p>No book found.</p>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      {/* Render other details of the book */}
    </div>
  );
};

export default BookDetail;
