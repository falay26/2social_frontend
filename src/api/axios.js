import axios from "axios";

const BASE_URL = "https://twosocial-5c6cdd299830.herokuapp.com";

export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
