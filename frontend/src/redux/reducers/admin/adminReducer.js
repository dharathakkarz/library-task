

import { ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAIL } from '../../ActionType';

const initialState = {
  adminData: null, 
  error: null, 
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        adminData: action.payload,
        error: null, 
      };
    case ADMIN_LOGIN_FAIL:
      return {
        ...state,
        adminData: null,
        error: action.payload, 
      };
    default:
      return state;
  }
};

export default adminReducer;
