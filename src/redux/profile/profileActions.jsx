import { ProfileBuy, ProfileDonate, ProfileExchange, ProfileOrders, ProfileWishlist } from "../../api/pathConstants";
import { Request } from "../../api/Request";
import { openSnackbar } from "../snackbar/snackbarActions";
import { getToken, removeTokenRequest } from "../token/tokenActions";
import {  ADD_USER_BUY, ADD_USER_EXCHANGE, ADD_USER_ORDERS, ADD_USER_WISHLIST } from "./profileTypes";

export const addUserBuyDetails = (value) => {
  return {
    type: ADD_USER_BUY,
    value: value,
  };
};

export const getUserBuy = () => {
  return async (dispatch, getState) => {
    if (!getState().profile.buy) {
      await dispatch(getToken());
      const token = await getState().token.access;
      const res = await Request("GET", ProfileBuy, token);
      if (res && res.status === 200) {
        await dispatch(addUserBuyDetails(res.data));
      } else if (res && res.status !== 200) {
        // await dispatch(removeTokenRequest());
      } else {
        await dispatch(openSnackbar("Network error"));
      }
    }
  };
};

export const addUserDonateDetails = (value) => {
  return {
    type: ADD_USER_DONATE,
    value: value,
  };
};

export const getUserDonate = () => {
  return async (dispatch, getState) => {
    if (!getState().profile.donate) {
      await dispatch(getToken());
      const token = await getState().token.access;
      const res = await Request("GET", ProfileDonate, token);
      if (res && res.status === 200) {
        await dispatch(addUserDonateDetails(res.data));
      } else if (res && res.status !== 200) {
        // await dispatch(removeTokenRequest());
      } else {
        await dispatch(openSnackbar("Network error"));
      }
    }
  };
};

export const addUserExchangeDetails = (value) => {
  return {
    type: ADD_USER_EXCHANGE,
    value: value,
  };
};

export const getUserDonate = () => {
  return async (dispatch, getState) => {
    if (!getState().profile.exchange) {
      await dispatch(getToken());
      const token = await getState().token.access;
      const res = await Request("GET", ProfileExchange, token);
      if (res && res.status === 200) {
        await dispatch(addUserExchangeDetails(res.data));
      } else if (res && res.status !== 200) {
        // await dispatch(removeTokenRequest());
      } else {
        await dispatch(openSnackbar("Network error"));
      }
    }
  };
};


export const addUserWishlistDetails = (value) => {
  return {
    type: ADD_USER_WISHLIST,
    value: value,
  };
};

export const getUserWishlist = () => {
  return async (dispatch, getState) => {
    if (!getState().profile.wishlist) {
      await dispatch(getToken());
      const token = await getState().token.access;
      const res = await Request("GET", ProfileWishlist, token);
      if (res && res.status === 200) {
        await dispatch(addUserWishlistDetails(res.data));
      } else if (res && res.status !== 200) {
        // await dispatch(removeTokenRequest());
      } else {
        await dispatch(openSnackbar("Network error"));
      }
    }
  };
};

export const addUserOrdersDetails = (value) => {
  return {
    type: ADD_USER_ORDERS,
    value: value,
  };
};

export const getUserWishlist = () => {
  return async (dispatch, getState) => {
    if (!getState().profile.orders) {
      await dispatch(getToken());
      const token = await getState().token.access;
      const res = await Request("GET", ProfileOrders, token);
      if (res && res.status === 200) {
        await dispatch(addUserOrdersDetails(res.data));
      } else if (res && res.status !== 200) {
        // await dispatch(removeTokenRequest());
      } else {
        await dispatch(openSnackbar("Network error"));
      }
    }
  };
};
