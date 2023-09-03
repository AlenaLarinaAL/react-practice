import axios from "axios";

const instance = axios.create({
  baseURL: "https://practices-api.vercel.app",
});

export const login = async (body) => {
  const { data } = instance.post("/auth/login", body);
  return data;
};
