import axios from 'axios';
import {
  FETCH_AUTHORS_REQUEST,
  FETCH_AUTHORS_SUCCESS,
  FETCH_AUTHORS_FAILURE,
  DELETE_AUTHOR_REQUEST,
  DELETE_AUTHOR_SUCCESS,
  DELETE_AUTHOR_FAILURE,
  UPDATE_AUTHOR_SUCCESS,
  UPDATE_AUTHOR_FAILURE
} from '../../../redux/ActionType';
import { SERVER_URL, BOOK } from '../../../constants/Constants';

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

export const deleteAuthorRequest = () => {
  return {
    type: DELETE_AUTHOR_REQUEST
  };
};

export const deleteAuthorSuccess = (authorName) => {
  return {
    type: DELETE_AUTHOR_SUCCESS,
    payload: authorName
  };
};

export const deleteAuthorFailure = (error) => {
  return {
    type: DELETE_AUTHOR_FAILURE,
    payload: error
  };
};

export const deleteAuthor = (authorName) => {
  return async (dispatch) => {
    dispatch(deleteAuthorRequest());
    try {
      await axios.delete(`${SERVER_URL}${BOOK}/deleteauthors/${authorName}`);
      dispatch(deleteAuthorSuccess(authorName));
    } catch (error) {
      dispatch(deleteAuthorFailure(error.message));
    }
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


//update author

export const updateAuthorSuccess = (oldName, newName) => {
  return {
    type: UPDATE_AUTHOR_SUCCESS,
    payload: { oldName, newName }
  };
};

export const updateAuthorFailure = (error) => {
  return {
    type: UPDATE_AUTHOR_FAILURE,
    payload: error
  };
};

export const updateAuthor = (oldName, newName) => {
  return async (dispatch) => {
    try {
      //  update author name
      const response = await axios.put(`${SERVER_URL}${BOOK}/updateauthors/${oldName}`, { newName });
      // dispatch success action
      dispatch(updateAuthorSuccess(oldName, newName));
    } catch (error) {
      // If an error occurs
      dispatch(updateAuthorFailure(error.message));
    }
  };
};