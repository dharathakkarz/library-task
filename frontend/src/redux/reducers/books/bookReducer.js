import { CREATE_BOOK , BOOK_CREATED_FAIL , BOOK_CREATED_SUCCESS } from "../../actions/books/actionType"
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
                default :return state;
    }

}
export {bookReducer}