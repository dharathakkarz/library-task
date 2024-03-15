
import { USER_REGISTER, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN, USER_LOGOUT_SUCCESS } from "../../ActionType";
import axios from 'axios';
import { SERVER_URL , AUTH} from '../../../constants/Constants'

const registerUser = (username, email, password, phone) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(
        ` ${SERVER_URL}${AUTH}/register`,
        { username, email, password, phone },
        config
      );

      console.log('Register User Action Payload:', data); 

      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });

      // save in local storage
      localStorage.setItem('userAuthData', JSON.stringify(data));

    } catch (error) {
      console.error('Register User Action Error:', error); 
      dispatch({
        type: USER_REGISTER_FAIL,
        payload: error.response.data.message,
      });
    }
  };
};

// login user

const loginUser = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: USER_LOGIN
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const { data } = await axios.post(`${SERVER_URL}${AUTH}/login`, { email, password }, config);

      console.log('Login User Action Payload:', data); 

      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      });

      // save in local storage
      localStorage.setItem('userAuthData', JSON.stringify(data));

    } catch (error) {
      console.error('Login User Action Error:', error); 
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: error.response.data.message,
      });
    }
  }
}

const logoutUser =() => async dispatch =>{
  try {
    localStorage.removeItem('userAuthData')
    dispatch({type :USER_LOGOUT_SUCCESS})
  } catch (error) {
    console.error('Logout User Action Error:', error);
  }
}



export { registerUser, loginUser ,logoutUser};//1
