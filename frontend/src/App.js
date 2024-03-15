
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar/NavBar';
import Home from './pages/home/Home';
import Book from './pages/book/Book';
import Signup from './pages/user/Signup';
import Login from './pages/user/Login';
import Post from './pages/post/Post';
import Admin from './pages/admin/Admin'
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageBook from './pages/admin/ManageBook';



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
      
        </Routes>
     
      </BrowserRouter>
    </>
  );
}

export default App;
