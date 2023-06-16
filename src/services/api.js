import axios from "axios";
import { AUTH_TOKEN, BACKEND_URL, GLOBAL_METHOD, REQUEST_TIMEOUT } from "utils/constants";

export const api = axios.create({
  baseURL: BACKEND_URL,
  timeout: REQUEST_TIMEOUT,
  method: GLOBAL_METHOD,
  headers: {
    Authorization: AUTH_TOKEN,
  }
});
