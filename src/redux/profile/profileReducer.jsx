import { ADD_USER_BUY, ADD_USER_DONATE, ADD_USER_EXCHANGE, ADD_USER_WISHLIST,ADD_USER_ORDERS } from "./profileTypes";

const initialState = {
  buy: null,
  donate: null,
  exchange: null,
  wishlist: null,
  order: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER_BUY:
      return {
        buy: action.value,
      };
    case ADD_USER_DONATE:
        return {
          donate: action.value,
        };
        case ADD_USER_EXCHANGE:
          return {
            exchange: action.value,
          };
          case ADD_USER_WISHLIST:
        return {
          wishlist: action.value,
        }; 
        case ADD_USER_ORDERS :
        return {
          order: action.value,
        };           
    default:
      return state;
  }
};

export default reducer;
