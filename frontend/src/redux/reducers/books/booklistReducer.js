import {   FETCH_SINGLE_BOOK_REQUEST,FETCH_SINGLE_BOOK_SUCCESS,FETCH_SINGLE_BOOK_FAILURE,BOOK_FETCH_FAIL, BOOK_FETCH_SUCCESS, FETCH_BOOK ,SEARCH_BOOK,BOOK_SEARCH_SUCCESS,BOOK_SEARCH_FAIL,SET_SEARCH_TERM} from "../../ActionType";
// const initialState = {
//   books: [],
//   loading: false,
//   error: null
// };

// const booklistReducer = (state = initialState, action) => {
//     switch(action.type){
//         case FETCH_BOOK:
//             return{
//                 ...state,
//                 loading:true,
//                 error: null
//             };
//             case BOOK_FETCH_SUCCESS:
//                 return{
//                     ...state,
//                     loading: false,
//                     books: action.payload.books || [],
//                     pagination: action.payload.pagination || null,
//                     error: null,
//                 };
//                 case BOOK_FETCH_FAIL:
//                     return{
//                         ...state,
//                         loading:false,
//                         error: action.payload

//                     }
//                     case SEARCH_BOOK:
//                       return {
//                         ...state,
//                         loading: true,
//                         error: null
//                       };
//                     case BOOK_SEARCH_SUCCESS:
//                       return {
//                         ...state,
//                         loading: false,
//                         books: action.payload.books || [],
//                         pagination: action.payload.pagination || null,
//                         error: null,
//                       };
//                     case BOOK_SEARCH_FAIL:
//                       return {
//                         ...state,
//                         loading: false,
//                         error: action.payload,
//                       };
//                     case SET_SEARCH_TERM:
//                       return {
//                         ...state,
//                         searchTerm: action.payload,
//                       };
//                       case FETCH_SINGLE_BOOK_REQUEST:
//                         return {
//                           ...state,
//                           loading: true,
//                           error: null,
//                         };
//                       case FETCH_SINGLE_BOOK_SUCCESS:
//                         return {
//                           ...state,
//                           loading: false,
//                           book: action.payload,
//                           error: null,
//                         };
//                       case FETCH_SINGLE_BOOK_FAILURE:
//                         return {
//                           ...state,
//                           loading: false,
//                           error: action.payload,
//                         };
//                     default :return state;


//     }
// }


const initialState = {
  books:[],
  loading: false,
  error: null,
};

const booklistReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOK:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case BOOK_FETCH_SUCCESS:
      console.log("Payload in BOOK_FETCH_SUCCESS:", action.payload); 
      
      return {
        ...state,
        loading: false,
        books: action.payload
      };
    case BOOK_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export {booklistReducer} // 1st

