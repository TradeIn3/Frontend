import axios from "axios";
// const API_HOSTNAME = "http://127.0.0.1:8000/api/";
const API_HOSTNAME = "https://bh5d8x9k87.execute-api.ap-south-1.amazonaws.com/dev/api/";



export const Request = async (method, endpoint, token, data) => {
  return await axios({
    method,
    url: API_HOSTNAME + endpoint,
    // timeout: 20000,
    headers: token
      ? {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      : {
          "Content-Type": "application/json",
        },
    data,
  }).catch((err) => err.response);
};

