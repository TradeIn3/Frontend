import {
  ADD_POST_DATA,
  ADD_QUESION_DATA,
  ADD_SAVED_DATA,
  DELETE_QUESION_DATA,
  ADD_ALL_POST_DATA,
  CREATE_POST_SUCCESS,
} from "./postTypes";

const initialState = {
  posts: {},
  loading: true,
  postLoading:true,
  success:false,
  postId:null,
  allPost :[],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_DATA:
      return {
        ...state,
        posts: {
          ...state.posts,
          [action.post.id]: action.post,
        },
        postLoading: false,
      };
      case ADD_ALL_POST_DATA:
      return {
        ...state,
        loading: false,
        allPost: action.post,
      };
      case CREATE_POST_SUCCESS:
      return {
        ...state,
        success: action.value,
        postId:action.id,
      };  
    case ADD_QUESION_DATA:
      return {
        ...state,
        loading: false,
        posts: {
          ...state.posts,
          [action.postId]: {
            ...state.posts[action.postId],
            questions: [
              ...state.posts[action.postId].questions,
              action.question,
            ],
          },
        },
      };
    case DELETE_QUESION_DATA:
      return {
        ...state,
        loading: false,
        posts: {
          ...state.posts,
          [action.postId]: {
            ...state.posts[action.postId],
            questions: action.question,
          },
        },
      };
    case ADD_SAVED_DATA:
      return {
        ...state,
        loading: false,
        posts: {
          ...state.posts,
          [action.postId]: {
            ...state.posts[action.postId],
            is_saved: action.value,
          },
        },
      };

    default:
      return state;
  }
};

export default reducer;
