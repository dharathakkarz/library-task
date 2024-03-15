import { UPDATE_BOOK_REQUEST, UPDATE_BOOK_SUCCESS, UPDATE_BOOK_FAILURE,CREATE_BOOK , BOOK_CREATED_FAIL , BOOK_CREATED_SUCCESS ,DELETE_BOOK_REQUEST,DELETE_BOOK_SUCCESS,DELETE_BOOK_FAILURE } from "../../ActionType"
const bookReducer =(state={},action)=>{
    switch(action.type){
        case CREATE_BOOK:
          return{
            loading: true,
          }  ;
          case BOOK_CREATED_SUCCESS:
            return{
                book: action.payload,
               
            }
            case  BOOK_CREATED_FAIL:
                return{
                    loading: false,
                    error: action.payload,
                }
                case DELETE_BOOK_REQUEST:
                  return {
                      ...state,
                      loading: true,
                      error: null
                  };
              case DELETE_BOOK_SUCCESS:
                  return {
                      ...state,
                      loading: false,
                      error: null 
                  };
              case DELETE_BOOK_FAILURE:
                  return {
                      ...state,
                      loading: false,
                      error: action.payload
                  };
                  case UPDATE_BOOK_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case UPDATE_BOOK_SUCCESS:
            return {
                ...state,
                loading: false,
                book: action.payload,
                error: null,
            };
        case UPDATE_BOOK_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
                default :return state;
    }

}
export {bookReducer}