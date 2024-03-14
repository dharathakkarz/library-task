
import axios from 'axios';
import { ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAIL } from '../../actions/books/actionType';


export const adminLogin = (email, password) => {
  return async (dispatch) => {
    try {
     
      const response = await axios.post('http://localhost:5000/api/auth/admin/login', { email, password });

      dispatch({
        type: ADMIN_LOGIN_SUCCESS,
        payload: response.data,  
      });

      
      localStorage.setItem('adminAuthData', JSON.stringify(response.data));

      return response.data; 
    } catch (error) {
    
      dispatch({
        type: ADMIN_LOGIN_FAIL,
        payload: error.response.data.message, //msg from server
      });

      throw error; 
    }
  };
};
