
import {
    FETCH_AUTHORS_REQUEST,
    FETCH_AUTHORS_SUCCESS,
    FETCH_AUTHORS_FAILURE,
    DELETE_AUTHOR_SUCCESS,
     DELETE_AUTHOR_FAILURE 
  } from '../../../redux/ActionType';
  
  const initialState = {
    authors: [],
    loading: false,
    error: ''
  };
  
  const authorReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_AUTHORS_REQUEST:
        return {
          ...state,
          loading: true
        };
      case FETCH_AUTHORS_SUCCESS:
        return {
          ...state,
          loading: false,
          authors: action.payload,
          error: ''
        };
      case FETCH_AUTHORS_FAILURE:
        return {
          ...state,
          loading: false,
          authors: [],
          error: action.payload
        };
        
      default:
        return state;
    }
  };
  
  export default authorReducer;
  