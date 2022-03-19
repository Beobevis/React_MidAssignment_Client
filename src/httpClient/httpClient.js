import axios from "axios";
import { CONFIG } from './config';

const getHeader = () => {
  const accessToken = localStorage.getItem("token");
  const authHeader = accessToken
    ? { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" }
    : { "Content-Type": "application/json" };
  return authHeader;
};

const handleError = (error) => {
  if (error?.response?.status === 401) {
    localStorage.setItem("token", "");

    if (!window.location.pathname.includes("login")) {
      window.location.href = "/login";
    }
  }
  throw error;
};

const get = (endPoint, options = {}) =>
  axios.get(CONFIG.baseURL + endPoint, { headers: getHeader(), ...options }).catch(handleError);

const post = (endPoint, data = {}) =>
  axios
    .post(CONFIG.baseURL + endPoint, JSON.stringify(data), { headers: getHeader() })
    .catch(handleError);

const put = (endPoint, data = {}) =>
  axios
    .put(CONFIG.baseURL + endPoint, JSON.stringify(data), { headers: getHeader() })
    .catch(handleError);

const apiDelete = (endPoint) =>
  axios.delete(CONFIG.baseURL + endPoint, { headers: getHeader() }).catch(handleError);

export default {
  get,
  post,
  delete: apiDelete,
  put,
};
