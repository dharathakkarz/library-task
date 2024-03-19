

import { ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAIL } from '../../ActionType';

// const initialState = {
//   token: null,
//   error: null,
// };

// const adminReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADMIN_LOGIN_SUCCESS:
//       return {
//         ...state,
//         token: action.payload,
//         error: null, 
//       };
//     case ADMIN_LOGIN_FAIL:
//       return {
//         ...state,
//         token: null,
//         error: action.payload, 
//       };
//     default:
//       return state;
//   }
// };



const initialState = {
  token: localStorage.getItem('adminToken'), // Load token from localStorage
  error: null,
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        error: null,
      };
    case ADMIN_LOGIN_FAIL:
      return {
        ...state,
        token: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default adminReducer;





