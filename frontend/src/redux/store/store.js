import { configureStore } from '@reduxjs/toolkit';
import {bookReducer} from '../reducers/books/bookReducer';
import {booklistReducer} from '../reducers/books/booklistReducer';
import {userauthReducer} from '../reducers/user/userauthReducer';
import {thunk} from 'redux-thunk';


// Retrieve userAuth from localStorage
const userAuth = localStorage.getItem('userAuthData') ? JSON.parse(localStorage.getItem('userAuthData')) : null;

const rootReducer = {
  bookcreated: bookReducer,
  booklist: booklistReducer,
  userlogin: userauthReducer,
};

const preloadedState = {
  userlogin: {
    userData: userAuth,
  },
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: false, // Disable Redux DevTools extension
  preloadedState,
});

export { store };
