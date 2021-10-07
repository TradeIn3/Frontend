import { ADD_POST_DATA } from "./postTypes";

const initialState = {
  posts: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_DATA:
      return {
        post: [...state.posts,action.post],
      };
    default:
      return state;
  }
};

export default reducer;
