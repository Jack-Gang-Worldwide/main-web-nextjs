import axios from "axios";

const AuthToken = process.env.AUTH_TOKEN;
export const baseAPI = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${AuthToken}`,
  },
});
