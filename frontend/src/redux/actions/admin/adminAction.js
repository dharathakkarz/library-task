

import axios from 'axios';
import { ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAIL } from '../../actions/books/actionType';


const dEmail = 'admin@gmail.com.com';
const dPassword = 'admin@123';

export const adminLogin = (email, password) => {
  return async (dispatch) => {
    try {
      if (email === dEmail && password === dPassword) {
    
        dispatch({
          type: ADMIN_LOGIN_SUCCESS,
          payload: { email: email, token: 'your-admin-token' }, 
        });
      } else {
       
        dispatch({
          type: ADMIN_LOGIN_FAIL,
          payload: 'Invalid email or password',
        });
      }
    } catch (error) {
     
      dispatch({
        type: ADMIN_LOGIN_FAIL,
        payload: 'Error logging in',
      });
    }
  };
};