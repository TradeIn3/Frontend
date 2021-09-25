import { GetUserDetails } from "../../api/pathConstants";
import { Request } from "../../api/Request";
import { openSnackbar } from "../snackbar/snackbarActions";
import { getToken, removeTokenRequest } from "../token/tokenActions";
import { ADD_MY_DETAILS } from "./myDetailsTypes";

export const addMyDetails = (myDetails) => {
  return {
    type: ADD_MY_DETAILS,
    myDetails: myDetails,
  };
};

export const getMyDetails = () => {
  return async (dispatch, getState) => {
    if (!getState().myDetails.myDetails) {
      await dispatch(getToken());
      const token = await getState().token.access;
      const res = await Request("GET", GetUserDetails, token);
      if (res && res.status === 200) {
        await dispatch(addMyDetails(res.data));
      } else if (res && res.status !== 200) {
        await dispatch(removeTokenRequest());
      } else if (!res.status) {
        await dispatch(openSnackbar("Network error"));
      }
    }
  };
};
