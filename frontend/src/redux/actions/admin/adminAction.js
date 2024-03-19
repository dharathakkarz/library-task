


// import { ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAIL } from '../../ActionType';


// const dEmail = 'admin@gmail.com.com';
// const dPassword = 'admin@123';

// export const adminLogin = (email, password) => {
//   return async (dispatch) => {
//     try {
//       if (email === dEmail && password === dPassword) {
    
//         dispatch({
//           type: ADMIN_LOGIN_SUCCESS,
//           payload: { email: email, token: 'your-admin-token' }, 
//         });
//       } else {
       
//         dispatch({
//           type: ADMIN_LOGIN_FAIL,
//           payload: 'Invalid email or password',
//         });
//       }
//     } catch (error) {
     
//       dispatch({
//         type: ADMIN_LOGIN_FAIL,
//         payload: 'Error logging in',
//       });
//     }
//   };
// };

// AdminAction.js


// // AdminAction.js
// import axios from 'axios';
// import { ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAIL } from '../../ActionType';
// import { SERVER_URL, AUTH } from '../../../constants/Constants';

// // Action creator to dispatch success action
// const adminLoginSuccess = (data) => ({
//   type: ADMIN_LOGIN_SUCCESS,
//   payload: data,
// });

// // Action creator to dispatch failure action
// const adminLoginFail = (error) => ({
//   type: ADMIN_LOGIN_FAIL,
//   payload: error,
// });

// // Action creator to handle API request
// export const adminLoginRequest = (email, password) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.post(`${SERVER_URL}${AUTH}/login`, { email, password });
//       const responseData = response.data;

//       // Check if the request was successful
//       if (response.status === 200) {
//         // Dispatch success action if admin login is successful
//         dispatch(adminLoginSuccess(responseData));
//         return responseData; // Return the response data if needed
//       } else {
//         // Dispatch failure action if admin login fails
//         dispatch(adminLoginFail(responseData.msg || 'Error logging in'));
//         return null;
//       }
//     } catch (error) {
//       console.error('Error logging in:', error);
//       // Dispatch failure action if an error occurs during login
//       dispatch(adminLoginFail('Error logging in'));
//       return null;
//     }
//   };
// };

import axios from 'axios';
import { ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAIL } from '../../ActionType';
import { SERVER_URL, AUTH } from '../../../constants/Constants';



const adminLoginSuccess = (data) => ({
  type: ADMIN_LOGIN_SUCCESS,
  payload: data,
});

const adminLoginFail = (error) => ({
  type: ADMIN_LOGIN_FAIL,
  payload: error,
});

export const adminLoginRequest = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${SERVER_URL}${AUTH}/login`, { email, password });
      const responseData = response.data;

      if (response.status === 200) {
        dispatch(adminLoginSuccess(responseData));
        localStorage.setItem('adminToken', responseData.token); // Save token to localStorage
        return responseData;
      } else {
        dispatch(adminLoginFail(responseData.msg || 'Error logging in'));
        return null;
      }
    } catch (error) {
      console.error('Error logging in:', error);
      dispatch(adminLoginFail('Error logging in'));
      return null;
    }
  };
};