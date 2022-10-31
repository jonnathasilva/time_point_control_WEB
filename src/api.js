import axios from "axios";

export const piontoutputRange = (token) => {
  return axios({
    method: "patch",
    baseURL: import.meta.env.VITE_URL,
    url: "/piontoutputRange",
    headers: { authorization: `Bearer ${token}` },
  });
};

export const piontreturnInterval = (token) => {
  return axios({
    method: "patch",
    baseURL: import.meta.env.VITE_URL,
    url: "/piontreturnInterval",
    headers: { authorization: `Bearer ${token}` },
  });
};

export const piontexit = (token) => {
  return axios({
    method: "patch",
    baseURL: import.meta.env.VITE_URL,
    url: "/piontexit",
    headers: { authorization: `Bearer ${token}` },
  });
};
