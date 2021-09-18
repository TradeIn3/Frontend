import { Request } from "../../api/Request";
import { AuthTokenObtainPair, AuthTokenRefresh } from "../../api/pathConstants";
import cookie from "react-cookies";

import {
  GET_TOKEN_REQUEST,
  GET_TOKEN_SUCCESS,
  SET_TOKEN_SUCCESS,
  REMOVE_TOKEN_REQUEST,
  GET_LOGIN_REQUEST,
} from "./tokenTypes";

import { openSnackbar } from "../snackbar/snackbarActions";
import { UNAUTH_LOGIN_PATH } from "../../constants/routeConstants";

export const getTokenRequest = () => {
  return {
    type: GET_TOKEN_REQUEST,
  };
};

export const removeTokenRequest = () => {
  cookie.remove("access", { path: "/" });
  cookie.remove("refresh", { path: "/" });
  cookie.remove("session_id", { path: "/" });
  return {
    type: REMOVE_TOKEN_REQUEST,
  };
};

export const setTokenSuccess = (token) => {
  return {
    type: SET_TOKEN_SUCCESS,
    token: token,
  };
};

export const getTokenSuccess = (data) => {
  return {
    type: GET_TOKEN_SUCCESS,
    data: data,
  };
};

export const getLoginRequest = () => {
  return {
    type: GET_LOGIN_REQUEST,
  };
};

export const getExpirationDate = (jwtToken) => {
  if (!jwtToken) {
    return null;
  }
  const jwt = JSON.parse(atob(jwtToken.split(".")[1]));
  // multiply by 1000 to convert seconds into milliseconds
  return (jwt && jwt.exp && jwt.exp * 1000) || null;
};

export const isExpired = (exp) => {
  if (!exp) {
    return true;
  }
  return Date.now() >= exp;
};

export const isTokenValid = (jwtToken) => {
  if (!jwtToken) {
    return false;
  }
  const isValid = jwtToken.match(
    /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/
  );
  if (isValid) {
    if (!isExpired(getExpirationDate(jwtToken))) {
      return true;
    }
  }
  return false;
};

// export const removeToken = () => {
//   localStorage.clear();
//   // localStorage.removeItem("myDetail");
//   cookie.remove("access", { path: "/" });
//   cookie.remove("refresh", { path: "/" });
//   cookie.remove("session_id", { path: "/" });

//   // setTokenValue({ access: null, refresh: null, session_id: null });
// };

export const getToken = () => {
  return async (dispatch, getState) => {
    await dispatch(getTokenRequest());
    if (!isTokenValid(getState().token.refresh)) {
      await dispatch(removeTokenRequest());
    } else {
      if (!isTokenValid(getState().token.access)) {
        const updatedToken = await Request("POST", AuthTokenRefresh, null, {
          refresh: getState().token.refresh,
        });
        if (updatedToken && updatedToken.status === 200) {
          await dispatch(setToken(updatedToken.data));
        } else if (!updatedToken.status) {
          await dispatch(openSnackbar("Network Error"));
        } else {
          await dispatch(removeTokenRequest());
        }
      } else {
        dispatch(getTokenSuccess(getState().token));
      }
    }
  };
};

export const setToken = (jwtToken) => {
  return async (dispatch) => {
    try {
      const today = new Date();
      const expiresAccess = new Date();
      const expiresRefresh = new Date();
      expiresAccess.setMinutes(today.getMinutes() + 30);
      expiresRefresh.setDate(today.getDate() + 1);
      cookie.save("access", jwtToken.access, {
        path: "/",
        expires: expiresAccess,
        // domain: 'https://quriverse.com',
        // secure: true,
        // httpOnly: true
      });
      cookie.save("refresh", jwtToken.refresh, {
        path: "/",
        expires: expiresRefresh,
        // domain: 'https://quriverse.com',
        // secure: true,
        // httpOnly: true
      });
      cookie.save("session_id", jwtToken.session_id, {
        path: "/",
        expires: expiresRefresh,
        // domain: 'https://quriverse.com',
        // secure: true,
        // httpOnly: true
      });

      await dispatch(setTokenSuccess(jwtToken));
    } catch (e) {
      dispatch(removeTokenRequest());
    }
  };
};

export const loginAction = (username, password, value) => {
  return async (dispatch) => {
    await dispatch(getLoginRequest());
    const res = await Request("POST", AuthTokenObtainPair, null, {
      username,
      password,
    });
    if (res) {
      if (res && res.status === 200) {
        await dispatch(setToken(res.data));
      } else if (!res.status) {
        await dispatch(openSnackbar("Network error"));
      } else {
        if (value === "signup") {
          window.location.href = UNAUTH_LOGIN_PATH;
        } else {
          await dispatch(removeTokenRequest());
          if (res.data.detail) await dispatch(openSnackbar(res.data.detail));
          else {
            if (res.data.username) {
              await dispatch(openSnackbar(res.data.username[0]));
            }
            if (res.data.password) {
              await dispatch(openSnackbar(res.data.password[0]));
            }
          }
        }
      }
    } else {
      if (value === "signup") {
        window.location.href = UNAUTH_LOGIN_PATH;
      } else {
        dispatch(removeTokenRequest());
        dispatch(openSnackbar("something went wrong"));
      }
    }
  };
};
