// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchBookAction } from '../../redux/actions/books/bookAction';
// import Nav from '../user/Nav';
// import Book from '../book/Book'; 

// const BookDetails = () => {
//   const dispatch = useDispatch();
//   const { loading, books, error, searchTerm } = useSelector((state) => state.booklist);

//   useEffect(() => {
//     dispatch(fetchBookAction());
//   }, [dispatch]);

//   const filteredBooks = searchTerm
//     ? books.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
//     : books;

//   return (
//     <>
//       <Nav />
//       <div>
//         <h2 style={{ textAlign: 'center', margin: '20px 0', color: 'blue' }}>View Books</h2>
//         <div className='cards-container' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
//           {loading ? (
//             <p>Loading books..</p>
//           ) : error ? (
//             <p>Error:{error}</p>
//           ) : filteredBooks.length > 0 ? (
//             filteredBooks.map((book) => (
            
//               <Book key={book.id} book={book} />
//             ))
//           ) : searchTerm ? (
//             <p>No matching books found</p>
//           ) : (
//             <p>No books</p>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default BookDetails;
