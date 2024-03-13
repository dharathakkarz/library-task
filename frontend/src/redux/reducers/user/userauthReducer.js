
import {
    USER_REGISTER_SUCCESS,
    USER_REGISTER,
    USER_REGISTER_FAIL,
    USER_LOGIN,
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT_SUCCESS
  } from "../../actions/books/actionType";
  
  const userauthReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_REGISTER:
        return {
          ...state,
          loading: true
        };
      case USER_REGISTER_SUCCESS:
        return {
          userData: action.payload,
          loading: false,
          error: null
        };
      case USER_REGISTER_FAIL:
        return {
          error: action.payload,
          loading: false
        };
  
      // Login
  
      case USER_LOGIN:
        return {
          loading: true
        };
      case USER_LOGIN_SUCCESS:
        return {
          userData: action.payload,
          loading: false,
          error: null
        };
      case USER_LOGIN_FAIL:
        return {
          error: action.payload,
          loading: false
        };

        case USER_LOGOUT_SUCCESS:
          return{}
  
      default:
        return state;
    }
  };
  
  export { userauthReducer };
  

