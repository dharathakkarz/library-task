
import {
    USER_REGISTER_SUCCESS,
    USER_REGISTER,
    USER_REGISTER_FAIL,
    USER_LOGIN,
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT_SUCCESS
  } from "../../ActionType";
  
  const initialState = {
    userData: null,
    loading: false,
    error: null,
    token: null,
  };
  const userauthReducer = (state = initialState, action) => {
    switch (action.type) {
      case USER_REGISTER:
        return {
          ...state,
          loading: true
        };
      case USER_REGISTER_SUCCESS:
        return {
          ...state,
          userData: action.payload,
          loading: false,
          error: null
        };
      case USER_REGISTER_FAIL:
        return {
          ...state,
          error: action.payload,
          loading: false
        };
  
      // Login
  
      case USER_LOGIN:
        return {
          ...state,
          loading: true
        };
      case USER_LOGIN_SUCCESS:
        return {
          ...state,
          token: action.payload,
          loading: false,
          error: null
        };
      case USER_LOGIN_FAIL:
        return {
          ...state,
          token: null,
          error: action.payload,
          loading: false
        };

        case USER_LOGOUT_SUCCESS:
          return{
            ...initialState
          }
  
      default:
        return state;
    }
  };
  
  export { userauthReducer };
  

