import axios from "axios";
const API_HOSTNAME = "http://127.0.0.1:8000/api/";

export const Request = async (method, endpoint, token, data) => {
  return await axios({
    method,
    url: API_HOSTNAME + endpoint,
    timeout: 20000,
    headers: token
      ? {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          // "Access-Control-Allow-Origin": ALLOWED_ORIGIN
        }
      : {
          "Content-Type": "application/json",
          // "Access-Control-Allow-Origin": ALLOWED_ORIGIN
        },
    data,
  }).catch((err) => err.response);
};
