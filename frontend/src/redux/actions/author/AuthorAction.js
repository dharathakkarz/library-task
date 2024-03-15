

import axios from 'axios';
import {  DELETE_AUTHOR_SUCCESS, DELETE_AUTHOR_FAILURE,FETCH_AUTHORS_REQUEST,FETCH_AUTHORS_SUCCESS, FETCH_AUTHORS_FAILURE } from '../../../redux/ActionType';
import { SERVER_URL ,BOOK} from '../../../constants/Constants'

export const fetchAuthorsRequest = () => {
    return {
      type: FETCH_AUTHORS_REQUEST
    };
  };
  
  export const fetchAuthorsSuccess = (authors) => {
    return {
      type: FETCH_AUTHORS_SUCCESS,
      payload: authors
    };
  };
  
  export const fetchAuthorsFailure = (error) => {
    return {
      type: FETCH_AUTHORS_FAILURE,
      payload: error
    };
  };
  
  export const fetchAuthors = () => {
    return async (dispatch) => {
      dispatch(fetchAuthorsRequest());
      try {
        const response = await axios.get(`${SERVER_URL}${BOOK}/allauthors`);
        dispatch(fetchAuthorsSuccess(response.data.authors));
      } catch (error) {
        dispatch(fetchAuthorsFailure(error.message));
      }
    };
  };


  