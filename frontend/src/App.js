
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBook from './components/AddBook';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Book from './components/Book';
import Signup from './components/user/Signup';
import Login from './components/user/Login';
import Post from './components/post/Post';


function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/addbook' element={<AddBook />} />
          <Route path='/book' element={<Book />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        <Route path='/post' element={<Post/>} />
        </Routes>
     
      </BrowserRouter>
    </>
  );
}

export default App;
