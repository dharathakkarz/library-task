import React, { useEffect } from 'react';
import Nav from '../user/Nav';
import { fetchBookAction } from '../../redux/actions/books/bookAction';
import { useDispatch, useSelector } from 'react-redux';

const Book = () => {
  const dispatch = useDispatch();
  const { loading, books, error, searchTerm } = useSelector((state) => state.booklist);

  useEffect(() => {
    dispatch(fetchBookAction());
  }, [dispatch]);

  const filteredBooks = searchTerm ? books.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
    : books;

  return (
    <>
      <Nav />
      <div>
        <h2 style={{ textAlign: 'center', margin: '20px 0', color: 'blue' }}>View Books</h2>
        <div className='cards-container' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {loading ? (
            <p>Loading books..</p>
          ) : error ? (
            <p>Error:{error}</p>
          ) : filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div key={book.id} className='card mb-3' style={{
                width: '18rem',
                margin: '10px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                overflow: 'hidden', 
              }}>


                {book.image && <img src={book.image} className='card-img-top' alt='' />}


                <div className='card-body'>
                  <h5 className='card-title'>{book.title}</h5>
                  <p className='card-text'>{book.description}</p>

                  <p className='card-text'>
                    <small className='text-muted'>price: {book.price}</small>

                  </p>
                  <p className='card-text'>
                    <small className='text-muted'>By: {book.author}</small>
                  </p>
                </div>
              </div>

            ))
          ) : searchTerm ? (
            <p>No matching books found</p>
          ) : (
            <p>No books</p>
          )}
        </div>
      </div>
    </>
  );
};


export default Book;// without details

