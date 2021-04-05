
import { DELETE_USER, FETCH_POSTS, LOGIN, EDIT_USER, FETCH_EDIT_USER } from '../Actions/type';

const initialState = {
    items: [],
    item: {}
}

export const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case LOGIN:
      return {
        ...state,
        item: action.payload
      };
      case DELETE_USER:
      return {
        ...state,
        items: state.items.filter((item, id) => id !== action.payload)
      };

      case FETCH_EDIT_USER:
      return {
        ...state,
        items: action.payload
      };

      case EDIT_USER:    
            return {    
                ...state,    
                items: state.items.map(    
                    (item, id) => item.id === action.payload.id ? {...item, itemsName : action.payload.itemsName ,  itemsDepartment : action.payload.itemsDepartment } : item)    
            };    
    default:
      return state;
  }
  }

