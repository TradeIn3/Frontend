import { ADD_MY_DETAILS,EDIT_ADDRESS_SUCCESS } from "./myDetailsTypes";

const initialState = {
  myDetails: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MY_DETAILS:
      return {
        myDetails: action.myDetails,
      };
      case EDIT_ADDRESS_SUCCESS:
      return {
        ...state,
        myDetails:{...state.myDetails,...action.value},
      };   
    default:
      return state;
  }
};

export default reducer;
