import { RetrievePost } from "../../api/pathConstants";
import { Request } from "../../api/Request";
import { openSnackbar } from "../snackbar/snackbarActions";
import { getToken, removeTokenRequest } from "../token/tokenActions";
import { ADD_POST_DATA } from "./postTypes";

export const addPostDetails = (post) => {
  return {
    type: ADD_POST_DATA,
    post: post,
  };
};

export const retrievePost = (category, sortby, donation) => {
  return async (dispatch, getState) => {
    await dispatch(getToken());
    const token = await getState().token.access;
    const res = await Request(
      "GET",
      `${RetrievePost}?category=${category}&sortby=${sortby}&donation=${donation}`,
      token
    );
    if (res && res.status === 200) {
      await dispatch(addPostDetails(res.data));
    }
    else if(res &&  res.status == 204 ){
      await dispatch(openSnackbar("No results found"));
    } else if (res && res.status != 200) {
      await dispatch(openSnackbar("Something went wrong"));
    } else {
      await dispatch(openSnackbar("Network error"));
    }
  };
};
