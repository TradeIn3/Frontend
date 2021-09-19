import axios from "axios";
const API_HOSTNAME = "https://tradein-api-backend.herokuapp.com/api/";

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
