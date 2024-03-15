import { configureStore } from '@reduxjs/toolkit';
import {bookReducer} from '../reducers/books/BookReducer';
import {booklistReducer} from '../reducers/books/BooklistReducer';
import {userauthReducer} from '../reducers/user/UserAuthReducer';
import {thunk} from 'redux-thunk';
import postReducer from '../reducers/user/PostReducer';
import adminReducer from '../reducers/admin/AdminReducer';
import authorReducer from '../reducers/author/AuthorReducer';


// Retrieve userAuth from localStorage
const userAuth = localStorage.getItem('userAuthData') ? JSON.parse(localStorage.getItem('userAuthData')) : null;

const rootReducer = {
  bookcreated: bookReducer,
  booklist: booklistReducer,
  userlogin: userauthReducer,
  posts:postReducer,
  admin:adminReducer,
  authors:authorReducer
};

const preloadedState = {
  userlogin: {
    userData: userAuth,
  },
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: false, // Disable Redux DevTools extension bcz it generates error
  preloadedState,
});

export { store };
