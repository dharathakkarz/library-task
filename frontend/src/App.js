
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Book from './components/book/Book';
import Signup from './components/user/Signup';
import Login from './components/user/Login';
import Post from './components/post/Post';
import Admin from './components/admin/Admin'
import AdminDashboard from './components/admin/adminDashboard';
import ManageBook from './components/admin/ManageBook';
import BookDetails from './components/book/BookDetails';


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
        
          <Route path='/book' element={<Book />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        <Route path='/post' element={<Post/>} />
        <Route path='/admin' element={<Admin/>} />
        <Route path='/admin/dashboard' element={<AdminDashboard/>} />
        <Route path='/manage-books' element={<ManageBook/>} />
        <Route path='/book/details' element={<BookDetails/>} />
        </Routes>
     
      </BrowserRouter>
    </>
  );
}

export default App;
