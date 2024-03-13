import axios from 'axios'
import {BOOK_SEARCH_SUCCESS,BOOK_SEARCH_FAIL, SEARCH_BOOK,SET_SEARCH_TERM,CREATE_BOOK ,BOOK_CREATED_FAIL,BOOK_CREATED_SUCCESS,FETCH_BOOK,BOOK_FETCH_FAIL,BOOK_FETCH_SUCCESS} from "./actionType"

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




// fetch all books
const fetchBookAction = () =>{
  return async (dispatch) =>{
    try {

      dispatch({
          type: FETCH_BOOK,
      })

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const {data} = await axios.get('http://localhost:5000/api/book/allbook', config);
       console.log('api called',data)
      dispatch({
          type: BOOK_FETCH_SUCCESS,
          payload: data,
        });

        dispatch(setSearchTerm(''));
       
      
    } catch (error) {
      dispatch({
          type: BOOK_FETCH_FAIL,
          payload: error.response.data.message,
        });
      
    }

  }
}


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

export {createBookAction , fetchBookAction,searchBook,setSearchTerm}