import { ADD_POST_DATA } from "./postTypes";

const initialState = {
  posts: [],
  loading:true,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_DATA:
      return {
        loading:false,
        posts: [...state.posts,...action.post],
      };
    default:
      return state;
  }
};

export default reducer;
