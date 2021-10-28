import { GetUserDetails , AddressEdit } from "../../api/pathConstants";
import { Request } from "../../api/Request";
import { openSnackbar } from "../snackbar/snackbarActions";
import { getToken, removeTokenRequest } from "../token/tokenActions";
import { ADD_MY_DETAILS ,EDIT_ADDRESS_SUCCESS} from "./myDetailsTypes";
import {EditProfileAddress} from "../profile/profileActions"
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
      } else {
        await dispatch(openSnackbar("Network error"));
      }
    }
  };
};

export const EditAddressSuccess = (value,id) => {
  return {
    type: EDIT_ADDRESS_SUCCESS,
    value: value,
    id:id,
  };
};


export const editAddress = (data) =>{
  return async (dispatch,getState) =>{
    await dispatch(getToken());
    const token = await getState().token.access;
    const user = await getState().myDetails.myDetails.username;
    if(token && user){
      data["user"] =user;
      const res = await Request("PUT",AddressEdit,token,data);
      if(res && res.status==200){
        await dispatch(EditAddressSuccess(res.data,user))
        await dispatch(EditProfileAddress(res.data,user))
        await dispatch(openSnackbar("Post edited successfully"));
      }
      else{
        await dispatch(openSnackbar("Something went wrong"));
        }
    }
    else{
      await dispatch(openSnackbar("Something went wrong"));
    }

  }
}
