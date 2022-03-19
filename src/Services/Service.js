import httpClient from "../httpClient/httpClient";
import { END_POINT } from "../httpClient/config";

export const loginService = () => {
  return httpClient.get(END_POINT.login);
};

export const profileService = (id) => {
  return httpClient.post(`${END_POINT.users}/${id}`);
};
