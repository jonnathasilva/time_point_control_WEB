import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ProtectRouter = ({ children }) => {
  const token = useState(localStorage.getItem("token"))[0];
  const navigate = useNavigate();

  axios({
    method: "get",
    baseURL: import.meta.env.VITE_URL,
    url: "/auth",
    headers: { authorization: `Bearer ${token}` },
  }).catch(() => {
    return navigate("/login");
  });

  return children;
};
