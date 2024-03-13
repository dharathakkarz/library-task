// import { BOOK_FETCH_FAIL, BOOK_FETCH_SUCCESS, FETCH_BOOK } from "../../actions/books/actionType";

// const booklistReducer = (state =  { loading: false, books: [], error: null }, action) => {
//     switch(action.type){
//         case FETCH_BOOK:
//             return{
//                 ...state,
//                 loading:true,
//             };
//             case BOOK_FETCH_SUCCESS:
//                 return{
//                     ...state,
//                     loading: false,
//                     books: action.payload.books || [],
//                     error: null,
//                 };
//                 case BOOK_FETCH_FAIL:
//                     return{
//                         ...state,
//                         loading:false,
//                         error: action.payload

//                     }
//                     default :return state;


//     }
// }

// export {booklistReducer}  1st


// booklistReducer.js

import { FETCH_BOOK, BOOK_FETCH_SUCCESS, BOOK_FETCH_FAIL, SEARCH_BOOK, BOOK_SEARCH_SUCCESS, BOOK_SEARCH_FAIL, SET_SEARCH_TERM } from '../../actions/books/actionType';

const initialState = {
  loading: false,
  books: [],
  error: null,
  searchTerm: '',
};

const booklistReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOK:
      return {
        ...state,
        loading: true,
      };
    case BOOK_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload.books || [],
        error: null,
      };
    case BOOK_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SEARCH_BOOK:
      return {
        ...state,
        loading: true,
      };
    case BOOK_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        books: action.payload.books || [],
        error: null,
      };
    case BOOK_SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};

export { booklistReducer };

