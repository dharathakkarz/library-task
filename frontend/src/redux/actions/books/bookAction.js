import axios from 'axios'
import { CREATE_BOOK ,BOOK_CREATED_FAIL,BOOK_CREATED_SUCCESS} from "./actionType"

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

export {createBookAction}