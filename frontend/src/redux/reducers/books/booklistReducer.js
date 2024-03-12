import { BOOK_FETCH_FAIL, BOOK_FETCH_SUCCESS, FETCH_BOOK } from "../../actions/books/actionType";

const booklistReducer = (state = [], action) => {
    switch(action.type){
        case FETCH_BOOK:
            return{
                loading:true,
            };
            case BOOK_FETCH_SUCCESS:
                return{
                   books:action.payload, 
                };
                case BOOK_FETCH_FAIL:
                    return{
                        loading:false,
                        error: action.payload

                    }
                    default :return state;


    }
}

export {booklistReducer}