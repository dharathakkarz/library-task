import axios from 'axios'
import {FETCH_SINGLE_BOOK_REQUEST,FETCH_SINGLE_BOOK_SUCCESS,FETCH_SINGLE_BOOK_FAILURE,UPDATE_BOOK_FAILURE,UPDATE_BOOK_SUCCESS,UPDATE_BOOK_REQUEST,DELETE_BOOK_REQUEST,DELETE_BOOK_FAILURE,DELETE_BOOK_SUCCESS,BOOK_SEARCH_SUCCESS,BOOK_SEARCH_FAIL, SEARCH_BOOK,SET_SEARCH_TERM,CREATE_BOOK ,BOOK_CREATED_FAIL,BOOK_CREATED_SUCCESS,FETCH_BOOK,BOOK_FETCH_FAIL,BOOK_FETCH_SUCCESS} from "./actionType"

const createBookAction = bookData =>{
    return async dispatch =>{
      try {

        dispatch({
            type: CREATE_BOOK,
        })

        const config = {
            'Content-type': 'application/json'
        }

        const {data} = await axios.post('http://localhost:5000/api/book/addbook', bookData, config);
        dispatch({
            type: BOOK_CREATED_SUCCESS,
             payload: data,
          
          });
         
        
      } catch (error) {
        dispatch({
            type: BOOK_CREATED_FAIL,
            payload: error.response.data.message,
          });
        
      }

    }
}




// // fetch all books
// const fetchBookAction = () =>{
//   return async (dispatch) =>{
//     try {

//       dispatch({
//           type: FETCH_BOOK,
//       })

//       const config = {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       };

//       const {data} = await axios.get('http://localhost:5000/api/book/allbook', config);
//        console.log('api called',data)
//       dispatch({
//           type: BOOK_FETCH_SUCCESS,
//           payload: data,
//         });

//         dispatch(setSearchTerm(''));
       
      
//     } catch (error) {
//       dispatch({
//           type: BOOK_FETCH_FAIL,
//           payload: error.response.data.message,
//         });
      
//     }

//   }
// } // working action

const fetchBookRequest = () => ({
  type: FETCH_BOOK,
});

const fetchBookSuccess = (books) => ({
  type: BOOK_FETCH_SUCCESS,
  payload: books,
});

const fetchBookFailure = (error) => ({
  type: BOOK_FETCH_FAIL,
  payload: error,
});


const fetchBookAction = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchBookRequest());

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.get('http://localhost:5000/api/book/allbook', config);
      dispatch(fetchBookSuccess(data));
      dispatch(setSearchTerm('')); 
    } catch (error) {
      dispatch(fetchBookFailure(error.response.data.message));
    }
  };
};



const searchBook = (searchTerm) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: SEARCH_BOOK,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post('http://localhost:5000/api/book/search', { searchTerm }, config);

      dispatch({
        type: BOOK_SEARCH_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: BOOK_SEARCH_FAIL,
        payload: error.response.data.message,
      });
    }
  };
};

const setSearchTerm = (searchTerm) => {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm,
  };
};

// const deleteBook = (id) => {
//   return async (dispatch) => {
//       try {
//           dispatch({ type: DELETE_BOOK_REQUEST });

//           const response = await axios.delete('http://localhost:5000/api/book/deletebook');

//           dispatch({
//               type: DELETE_BOOK_SUCCESS,
//               payload: response.data
//           });
//       } catch (error) {
//           dispatch({
//               type: DELETE_BOOK_FAILURE,
//               payload: error.response.data.message || 'Something went wrong'
//           });
//       }
//   };
// };
export const deleteBookAction = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: DELETE_BOOK_REQUEST });

    
      const response = await axios.delete(`http://localhost:5000/api/book/deletebook/${id}`);

      dispatch({
        type: DELETE_BOOK_SUCCESS,
        payload: response.data 
      });
    } catch (error) {
      dispatch({
        type: DELETE_BOOK_FAILURE,
        payload: error.response.data.message || 'Something went wrong'
      });
    }
  };
};


 const updateBookAction = (formData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_BOOK_REQUEST });

      const response = await axios.put(`http://localhost:5000/api/book/updatebook/${formData.id}`, formData);

      dispatch({
        type: UPDATE_BOOK_SUCCESS,
        payload: response.data
      });
    } catch (error) {
      dispatch({
        type: UPDATE_BOOK_FAILURE,
        payload: error.response.data.message || 'Something went wrong'
      });
    }
  };
};

//single book fetch
const fetchSingleBookRequest = () => ({
  type: FETCH_SINGLE_BOOK_REQUEST,
});


const fetchSingleBookSuccess = (book) => ({
  type: FETCH_SINGLE_BOOK_SUCCESS,
  payload: book,
});


const fetchSingleBookFailure = (error) => ({
  type: FETCH_SINGLE_BOOK_FAILURE,
  payload: error,
});


const fetchSingleBook = (bookId) => {
  return async (dispatch) => {
    dispatch(fetchSingleBookRequest());

    try {
      const response = await axios.get(`http://localhost:5000/api/book/singlebook/${bookId}`);
      dispatch(fetchSingleBookSuccess(response.data.book));
    } catch (error) {
      dispatch(fetchSingleBookFailure(error.message));
    }
  };
};



export {createBookAction ,fetchSingleBook, fetchBookAction,searchBook,setSearchTerm,updateBookAction}