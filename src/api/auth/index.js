import axios from "axios";

const PORT = "http://localhost:8000";

export const Login = async (data) => {
  return axios.post(`${PORT}/api/v1/user/signin`, data);
};

export const Profile = async (token) => {
  return axios.get(`${PORT}/api/v1/user/me`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
};
