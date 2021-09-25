import { ADD_MY_DETAILS } from "./myDetailsTypes";

const initialState = {
  myDetails: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MY_DETAILS:
      return {
        myDetails: action.myDetails,
      };
    default:
      return state;
  }
};

export default reducer;
