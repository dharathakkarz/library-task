// import axios from 'axios'
// import {FETCH_SINGLE_BOOK_REQUEST,FETCH_SINGLE_BOOK_SUCCESS,FETCH_SINGLE_BOOK_FAILURE,UPDATE_BOOK_FAILURE,UPDATE_BOOK_SUCCESS,UPDATE_BOOK_REQUEST,DELETE_BOOK_REQUEST,DELETE_BOOK_FAILURE,DELETE_BOOK_SUCCESS,BOOK_SEARCH_SUCCESS,BOOK_SEARCH_FAIL, SEARCH_BOOK,SET_SEARCH_TERM,CREATE_BOOK ,BOOK_CREATED_FAIL,BOOK_CREATED_SUCCESS,FETCH_BOOK,BOOK_FETCH_FAIL,BOOK_FETCH_SUCCESS} from "../../ActionType"
// import { SERVER_URL ,BOOK} from '../../../constants/Constants'

// const createBookAction = bookData =>{
//     return async dispatch =>{
//       try {

//         dispatch({
//             type: CREATE_BOOK,
//         })

//         const config = {
//             'Content-type': 'application/json'
//         }

//         const {data} = await axios.post(`${SERVER_URL}${BOOK}/addbook`, bookData, config);
//         dispatch({
//             type: BOOK_CREATED_SUCCESS,
//              payload: data,
          
//           });
         
        
//       } catch (error) {
//         dispatch({
//             type: BOOK_CREATED_FAIL,
//             payload: error.response.data.message,
//           });
        
//       }

//     }
// }





// const fetchBookRequest = () => ({
//   type: FETCH_BOOK,
// });

// const fetchBookSuccess = (books) => ({
//   type: BOOK_FETCH_SUCCESS,
//   payload: books,
// });

// const fetchBookFailure = (error) => ({
//   type: BOOK_FETCH_FAIL,
//   payload: error,
// });


// const fetchBookAction = (page) => {
//   return async (dispatch) => {
//     try {
//       dispatch(fetchBookRequest());

//       const config = {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       };

//       const { data } = await axios.get(`${SERVER_URL}${BOOK}/allbooks?page=${page}`, config);
//       dispatch(fetchBookSuccess(data));
//       dispatch(setSearchTerm('')); 
//     } catch (error) {
//       dispatch(fetchBookFailure(error.response.data.message));
//     }
//   };
// };



// const searchBook = (searchTerm) => {
//   return async (dispatch) => {
//     try {
//       dispatch({
//         type: SEARCH_BOOK,
//       });

//       const config = {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       };

//       const { data } = await axios.post(`${SERVER_URL}${BOOK}/search`, { searchTerm }, config);

//       dispatch({
//         type: BOOK_SEARCH_SUCCESS,
//         payload: data,
//       });
//     } catch (error) {
//       dispatch({
//         type: BOOK_SEARCH_FAIL,
//         payload: error.response.data.message,
//       });
//     }
//   };
// };

// const setSearchTerm = (searchTerm) => {
//   return {
//     type: SET_SEARCH_TERM,
//     payload: searchTerm,
//   };
// };


// export const deleteBookAction = (id) => {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: DELETE_BOOK_REQUEST });

    
//       const response = await axios.delete(`${SERVER_URL}${BOOK}/deletebook/${id}`);

//       dispatch({
//         type: DELETE_BOOK_SUCCESS,
//         payload: response.data 
//       });
//     } catch (error) {
//       dispatch({
//         type: DELETE_BOOK_FAILURE,
//         payload: error.response.data.message || 'Something went wrong'
//       });
//     }
//   };
// };


//  const updateBookAction = (formData) => {
//   return async (dispatch) => {
//     try {
//       dispatch({ type: UPDATE_BOOK_REQUEST });

//       const response = await axios.put(`${SERVER_URL}${BOOK}/updatebook/${formData.id}`, formData);

//       dispatch({
//         type: UPDATE_BOOK_SUCCESS,
//         payload: response.data
//       });
//     } catch (error) {
//       dispatch({
//         type: UPDATE_BOOK_FAILURE,
//         payload: error.response.data.message || 'Something went wrong'
//       });
//     }
//   };
// };

// //single book fetch
// const fetchSingleBookRequest = () => ({
//   type: FETCH_SINGLE_BOOK_REQUEST,
// });


// const fetchSingleBookSuccess = (book) => ({
//   type: FETCH_SINGLE_BOOK_SUCCESS,
//   payload: book,
// });


// const fetchSingleBookFailure = (error) => ({
//   type: FETCH_SINGLE_BOOK_FAILURE,
//   payload: error,
// });


// const fetchSingleBook = (bookId) => {
//   return async (dispatch) => {
//     dispatch(fetchSingleBookRequest());

//     try {
//       const response = await axios.get(`${SERVER_URL}${BOOK}/singlebook/${bookId}`);
//       dispatch(fetchSingleBookSuccess(response.data.book));
//     } catch (error) {
//       dispatch(fetchSingleBookFailure(error.message));
//     }
//   };
// };



// export {createBookAction ,fetchSingleBook, fetchBookAction,searchBook,setSearchTerm,updateBookAction}
//this is without admin token
import axios from 'axios'
import { SERVER_URL ,BOOK} from '../../../constants/Constants'

import {
  CREATE_BOOK,
  BOOK_CREATED_SUCCESS,
    BOOK_CREATED_FAIL, BOOK_FETCH_SUCCESS, BOOK_FETCH_FAIL, 
    FETCH_BOOK
} from '../../ActionType';

const getToken = () => {  
  
  return localStorage.getItem('token');
};

const createBookAction = (bookData) => async (dispatch) => {
  
  try {
    console.log("hie")
    const token = getToken(); // Retrieve the token from localStorage
    console.log("fgf")
    const config = {
      headers: {
        
         'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}` //  headers
      }
      
    };
    console.log("token",token)
    console.log("hieee")
    const response = await axios.post(
      `${SERVER_URL}${BOOK}/addbook`,
      
      bookData,
      config
    );
    console.log('hft')
  


    dispatch({
      type: CREATE_BOOK,
      payload: response.data, 
        });

    console.log('BOOK created successfully');
  } catch (error) {
    console.error('Error creating book:', error);
  
  }
};




const fetchBooks = (page, pageSize) => async (dispatch) => {
  try {
    const token = getToken();
    const config = {
      headers: {
        'Authorization': `Bearer ${token}`
      },
      params: { page, pageSize }
    };

    dispatch({ type: FETCH_BOOK });

    const response = await axios.get(`${SERVER_URL}${BOOK}/allbook`, config);

    dispatch({
      type: FETCH_BOOK,
      payload: response.data.posts
    });
  } catch (error) {
    console.error('Error fetching books:', error);
  }
};
export { createBookAction,fetchBooks  };

