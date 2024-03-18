
import {
    FETCH_AUTHORS_REQUEST,
    FETCH_AUTHORS_SUCCESS,
    FETCH_AUTHORS_FAILURE,
    DELETE_AUTHOR_SUCCESS,
    DELETE_AUTHOR_FAILURE,
    UPDATE_AUTHOR_SUCCESS,
    UPDATE_AUTHOR_FAILURE
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
        case DELETE_AUTHOR_SUCCESS:
          return {
            ...state,
            authors: state.authors.filter(author => author !== action.payload),
            error: ''
          };
        case DELETE_AUTHOR_FAILURE:
          return {
            ...state,
            error: action.payload
          };
          case UPDATE_AUTHOR_SUCCESS:
          return {
            ...state,
            authors: state.authors.map(author => (author === action.payload.oldName ? action.payload.newName : author)),
            error: ''
          };
        case UPDATE_AUTHOR_FAILURE:
          return {
            ...state,
            error: action.payload
          };
        
      default:
        return state;
    }
  };
  
  export default authorReducer;
  