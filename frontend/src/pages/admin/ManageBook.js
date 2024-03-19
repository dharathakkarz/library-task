
 
// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchBookAction, createBookAction, deleteBookAction, updateBookAction } from '../../redux/actions/books/BookAction';
// import { Link } from 'react-router-dom';

// const ManageBooks = () => {
//   const dispatch = useDispatch();
//   const { loading, books, error } = useSelector(state => state.booklist);
//   const [formData, setFormData] = useState({
//     title: '',
//     author: '',
//     description: '',
//     image: '',
//     category: '',
//     price: ''
//   });

//   const [updateFormData, setUpdateFormData] = useState({
//     id: '',
//     title: '',
//     author: '',
//     description: '',
//     image: '',
//     category: '',
//     price: ''
//   });

//   const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
//   const [currentBook, setCurrentBook] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     dispatch(fetchBookAction());
//   }, [dispatch]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleUpdateChange = (e) => {
//     setUpdateFormData({ ...updateFormData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Adding book:', formData);
//     dispatch(createBookAction(formData));
//     setFormData({
//       title: '',
//       author: '',
//       description: '',
//       image: '',
//       category: '',
//       price: ''
//     });
//   };

//   const handleDelete = (id) => {
//     console.log('Deleting book with id:', id);
//     dispatch(deleteBookAction(id));
//   };

//   const handleEdit = (book) => {
//     setCurrentBook(book);
//     setUpdateFormData({
//       id: book._id,
//       title: book.title,
//       author: book.author,
//       description: book.description,
//       image: book.image,
//       category: book.category,
//       price: book.price
//     });
//     setIsEditPopupOpen(true);
//   };

//   const handleUpdate = async () => {
//     console.log('Updating book:', updateFormData);
//     const updatedFormData = { ...updateFormData, id: currentBook._id };
//     dispatch(updateBookAction(updatedFormData));
//     setIsEditPopupOpen(false);
//   };

//   const filteredBooks = books.filter(book => {
//     return book.title.toLowerCase().includes(searchQuery.toLowerCase());
//   });

//   return (
//     <div>
//       <nav className="navbar navbar-light bg-light">
//         <div className="container-fluid">
//           <span className="navbar-brand mb-0 h1">Manage Books</span>
//           <form className="d-flex">
//             <input className="form-control me-2" type="search" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
//           </form>
//           <Link to="/" className="btn btn-secondary">Logout</Link> 
//         </div>
//       </nav>
//       <div className="container">
//         <div className="row justify-content-center"> 
//           <div className="col-md-8">
//             <h3>Add New Book</h3>
//             <form onSubmit={handleSubmit}>
//               <div className='card mb-3'>
//                 <div className='card-body'>
//                   <input type="text" className="form-control mb-2" placeholder="Title" name="title" value={formData.title} onChange={handleChange} />
//                   <input type="text" className="form-control mb-2" placeholder="Author" name="author" value={formData.author} onChange={handleChange} />
//                   <textarea className="form-control mb-2" placeholder="Description" name="description" value={formData.description} onChange={handleChange} />
//                   <input type="text" className="form-control mb-2" placeholder="Image URL" name="image" value={formData.image} onChange={handleChange} />
//                   <input type="text" className="form-control mb-2" placeholder="Category" name="category" value={formData.category} onChange={handleChange} />
//                   <input type="text" className="form-control mb-2" placeholder="Price" name="price" value={formData.price} onChange={handleChange} />
//                   <button type="submit" className="btn btn-primary">Submit</button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//         <div className="row mt-4">
        
//           {loading ? (
//             <p>Loading books..</p>
//           ) : error ? (
//             <p>Error: {error}</p>
//           ) : filteredBooks.length > 0 ? (
//             filteredBooks.map((book) => (
//               <div key={book.id} className='col-md-4'>
//                 <div className='card mb-3'>
//                   <img src={book.image} className='card-img-top' alt='' />
//                   <div className='card-body'>
//                     <h5 className='card-title'>{book.title}</h5>
//                     <p className='card-text'>{book.description}</p>
//                     <p className='card-text'>
//                       <small className='text-muted'>Price: {book.price}</small>
//                     </p>
//                     <p className='card-text'>
//                       <small className='text-muted'>By: {book.author}</small>
//                     </p>
//                     <div className="d-flex justify-content-between">
//                       <button className="btn btn-info" onClick={() => handleEdit(book)}>Update</button>
//                       <button className="btn btn-danger" onClick={() => handleDelete(book._id)}>Delete</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No books found</p>
//           )}
//         </div>
//       </div>
//       {/* update */}
//       {isEditPopupOpen && (
//         <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
//           <div className="modal-dialog" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">Edit Book</h5>
//                 <button type="button" className="close" onClick={() => setIsEditPopupOpen(false)}>
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body">
//                 <form>
//                   <div className="form-group">
//                     <label htmlFor="title">Title</label>
//                     <input type="text" className="form-control" id="title" name="title" value={updateFormData.title} onChange={handleUpdateChange} />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="author">Author</label>
//                     <input type="text" className="form-control" id="author" name="author" value={updateFormData.author} onChange={handleUpdateChange} />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="description">Description</label>
//                     <textarea className="form-control" id="description" name="description" value={updateFormData.description} onChange={handleUpdateChange} />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="image">Image URL</label>
//                     <input type="text" className="form-control" id="image" name="image" value={updateFormData.image} onChange={handleUpdateChange} />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="category">Category</label>
//                     <input type="text" className="form-control" id="category" name="category" value={updateFormData.category} onChange={handleUpdateChange} />
//                   </div>
//                   <div className="form-group">
//                     <label htmlFor="price">Price</label>
//                     <input type="text" className="form-control" id="price" name="price" value={updateFormData.price} onChange={handleUpdateChange} />
//                   </div>
//                 </form>
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update</button>
//                 <button type="button" className="btn btn-secondary" onClick={() => setIsEditPopupOpen(false)}>Cancel</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageBooks;


// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchBookAction, createBookAction, deleteBookAction, updateBookAction } from '../../redux/actions/books/BookAction';

// //import { fetchBookAction, createBookAction, deleteBookAction, updateBookAction } from '../../redux/actions/books/BookAction';
// import { Link } from 'react-router-dom';

// const ManageBooks = () => {
//   const dispatch = useDispatch();
//   const { loading, books, error } = useSelector(state => state.booklist);
//  // const token = useSelector(state => state.auth.token); // Access token from Redux state
//  const { userData } = useSelector(state => state.userlogin); // Access user authentication data
//  const token = userData ? userData.token : null; 
//   // Check if token is not null before accessing its properties
//   const isAdmin = token && token.isAdmin;

//   const [formData, setFormData] = useState({
//     title: '',
//     author: '',
//     description: '',
//     image: '',
//     category: '',
//     price: ''
//   });

//   const [updateFormData, setUpdateFormData] = useState({
//     id: '',
//     title: '',
//     author: '',
//     description: '',
//     image: '',
//     category: '',
//     price: ''
//   });

//   const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
//   const [currentBook, setCurrentBook] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     dispatch(fetchBookAction());
//   }, [dispatch]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleUpdateChange = (e) => {
//     setUpdateFormData({ ...updateFormData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Adding book:', formData);
//     dispatch(createBookAction(formData));
//     setFormData({
//       title: '',
//       author: '',
//       description: '',
//       image: '',
//       category: '',
//       price: ''
//     });
//   };

//   const handleDelete = (id) => {
//     console.log('Deleting book with id:', id);
//     dispatch(deleteBookAction(id));
//   };

//   const handleEdit = (book) => {
//     setCurrentBook(book);
//     setUpdateFormData({
//       id: book._id,
//       title: book.title,
//       author: book.author,
//       description: book.description,
//       image: book.image,
//       category: book.category,
//       price: book.price
//     });
//     setIsEditPopupOpen(true);
//   };

//   const handleUpdate = async () => {
//     console.log('Updating book:', updateFormData);
//     const updatedFormData = { ...updateFormData, id: currentBook._id };
//     dispatch(updateBookAction(updatedFormData));
//     setIsEditPopupOpen(false);
//   };

//   const filteredBooks = books.filter(book => {
//     return book.title.toLowerCase().includes(searchQuery.toLowerCase());
//   });

//   return (
//     <div>
//       {isAdmin ? ( // Render content only if isAdmin is true
//         <div>
//           <nav className="navbar navbar-light bg-light">
//             <div className="container-fluid">
//               <span className="navbar-brand mb-0 h1">Manage Books</span>
//               <form className="d-flex">
//                 <input className="form-control me-2" type="search" placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
//               </form>
//               <Link to="/" className="btn btn-secondary">Logout</Link> 
//             </div>
//           </nav>
//           <div className="container">
//             <div className="row justify-content-center"> 
//               <div className="col-md-8">
//                 <h3>Add New Book</h3>
//                 <form onSubmit={handleSubmit}>
//                   <div className='card mb-3'>
//                     <div className='card-body'>
//                       <input type="text" className="form-control mb-2" placeholder="Title" name="title" value={formData.title} onChange={handleChange} />
//                       <input type="text" className="form-control mb-2" placeholder="Author" name="author" value={formData.author} onChange={handleChange} />
//                       <textarea className="form-control mb-2" placeholder="Description" name="description" value={formData.description} onChange={handleChange} />
//                       <input type="text" className="form-control mb-2" placeholder="Image URL" name="image" value={formData.image} onChange={handleChange} />
//                       <input type="text" className="form-control mb-2" placeholder="Category" name="category" value={formData.category} onChange={handleChange} />
//                       <input type="text" className="form-control mb-2" placeholder="Price" name="price" value={formData.price} onChange={handleChange} />
//                       <button type="submit" className="btn btn-primary">Submit</button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//             <div className="row mt-4">
//               {loading ? (
//                 <p>Loading books..</p>
//               ) : error ? (
//                 <p>Error: {error}</p>
//               ) : filteredBooks.length > 0 ? (
//                 filteredBooks.map((book) => (
//                   <div key={book.id} className='col-md-4'>
//                     <div className='card mb-3'>
//                       <img src={book.image} className='card-img-top' alt='' />
//                       <div className='card-body'>
//                         <h5 className='card-title'>{book.title}</h5>
//                         <p className='card-text'>{book.description}</p>
//                         <p className='card-text'>
//                           <small className='text-muted'>Price: {book.price}</small>
//                         </p>
//                         <p className='card-text'>
//                           <small className='text-muted'>By: {book.author}</small>
//                         </p>
//                         <div className="d-flex justify-content-between">
//                           <button className="btn btn-info" onClick={() => handleEdit(book)}>Update</button>
//                           <button className="btn btn-danger" onClick={() => handleDelete(book._id)}>Delete</button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <p>No books found</p>
//               )}
//             </div>
//           </div>
//           {/* update */}
//           {isEditPopupOpen && (
//             <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
//               <div className="modal-dialog" role="document">
//                 <div className="modal-content">
//                   <div className="modal-header">
//                     <h5 className="modal-title">Edit Book</h5>
//                     <button type="button" className="close" onClick={() => setIsEditPopupOpen(false)}>
//                       <span aria-hidden="true">&times;</span>
//                     </button>
//                   </div>
//                   <div className="modal-body">
//                     <form>
//                       <div className="form-group">
//                         <label htmlFor="title">Title</label>
//                         <input type="text" className="form-control" id="title" name="title" value={updateFormData.title} onChange={handleUpdateChange} />
//                       </div>
//                       <div className="form-group">
//                         <label htmlFor="author">Author</label>
//                         <input type="text" className="form-control" id="author" name="author" value={updateFormData.author} onChange={handleUpdateChange} />
//                       </div>
//                       <div className="form-group">
//                         <label htmlFor="description">Description</label>
//                         <textarea className="form-control" id="description" name="description" value={updateFormData.description} onChange={handleUpdateChange} />
//                       </div>
//                       <div className="form-group">
//                         <label htmlFor="image">Image URL</label>
//                         <input type="text" className="form-control" id="image" name="image" value={updateFormData.image} onChange={handleUpdateChange} />
//                       </div>
//                       <div className="form-group">
//                         <label htmlFor="category">Category</label>
//                         <input type="text" className="form-control" id="category" name="category" value={updateFormData.category} onChange={handleUpdateChange} />
//                       </div>
//                       <div className="form-group">
//                         <label htmlFor="price">Price</label>
//                         <input type="text" className="form-control" id="price" name="price" value={updateFormData.price} onChange={handleUpdateChange} />
//                       </div>
//                     </form>
//                   </div>
//                   <div className="modal-footer">
//                     <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update</button>
//                     <button type="button" className="btn btn-secondary" onClick={() => setIsEditPopupOpen(false)}>Cancel</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       ) : (
//         <div>
//           <p>You do not have permission to access this page.</p>
//           {/* You can optionally redirect the user to another page or display a different message */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ManageBooks;


// // ManageBooks.j
// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { createBookAction } from '../../redux/actions/books/BookAction';
// import { Link } from 'react-router-dom';

// const ManageBooks = () => {
//   const dispatch = useDispatch();
//   const adminToken = useSelector(state => state.admin.token); // Access admin token from Redux state

//   const [formData, setFormData] = useState({
//     title: '',
//     author: '',
//     description: '',
//     image: '',
//     category: '',
//     price: ''
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(createBookAction(formData, adminToken));
//     // Reset form data after submission
//     setFormData({
//       title: '',
//       author: '',
//       description: '',
//       image: '',
//       category: '',
//       price: ''
//     });
//   };

//   return (
//     <div>
//       <nav className="navbar navbar-light bg-light">
//         <div className="container-fluid">
//           <span className="navbar-brand mb-0 h1">Manage Books</span>
//           <Link to="/" className="btn btn-secondary">Logout</Link> 
//         </div>
//       </nav>
//       <div className="container">
//         <div className="row justify-content-center"> 
//           <div className="col-md-8">
//             <h3>Add New Book</h3>
//             <form onSubmit={handleSubmit}>
//               <div className='card mb-3'>
//                 <div className='card-body'>
//                   <input type="text" className="form-control mb-2" placeholder="Title" name="title" value={formData.title} onChange={handleChange} />
//                   <input type="text" className="form-control mb-2" placeholder="Author" name="author" value={formData.author} onChange={handleChange} />
//                   <textarea className="form-control mb-2" placeholder="Description" name="description" value={formData.description} onChange={handleChange} />
//                   <input type="text" className="form-control mb-2" placeholder="Image URL" name="image" value={formData.image} onChange={handleChange} />
//                   <input type="text" className="form-control mb-2" placeholder="Category" name="category" value={formData.category} onChange={handleChange} />
//                   <input type="text" className="form-control mb-2" placeholder="Price" name="price" value={formData.price} onChange={handleChange} />
//                   <button type="submit" className="btn btn-primary">Submit</button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageBooks;//create
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../../redux/actions/books/BookAction';

const ManageBooks = () => {
  const dispatch = useDispatch();
  const adminToken = useSelector((state) => state.admin.token);
  const booksState = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooks(1, adminToken)); // Fetch first page of books when component mounts
  }, [dispatch, adminToken]);

  const { books, loading, error } = booksState;

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books && books.map((book) => (
          <>
          <li key={book.id}>{book.title}</li>
          <li>{book.price}</li>
          <li>{book.author}</li>
          <li>{book.description}</li>
          <li>{book.image}</li>
          <li>{book.category}</li>
        </>
        ))}
      </ul>
    </div>
  );
};

export default ManageBooks;
