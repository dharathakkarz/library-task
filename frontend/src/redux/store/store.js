import { configureStore } from '@reduxjs/toolkit';
import {bookReducer} from '../reducers/books/bookReducer';
import {booklistReducer} from '../reducers/books/booklistReducer';
import {userauthReducer} from '../reducers/user/userauthReducer';
import {thunk} from 'redux-thunk';
import postReducer from '../reducers/user/postReducer';
import adminReducer from '../reducers/admin/adminReducer';


// Retrieve userAuth from localStorage
const userAuth = localStorage.getItem('userAuthData') ? JSON.parse(localStorage.getItem('userAuthData')) : null;

const rootReducer = {
  bookcreated: bookReducer,
  booklist: booklistReducer,
  userlogin: userauthReducer,
  posts:postReducer,
  admin:adminReducer
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
