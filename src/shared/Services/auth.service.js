import axios from "axios";

const API_URL = "http://localhost:4000/api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const getMetrics = () => {
  return axios
    .get(API_URL + "get-metrics")
    .then((response) => {
      return response;
    });
};
const addMetrics = (data) => {
  return axios
    .post(API_URL + "add-metrics", data)
    .then((response) => {
      return response;
    });
};
const updateMetrics = (metricId, data) => {
  return axios
    .post(API_URL + "update-metrics", metricId, data)
    .then((response) => {
      return response;
    });
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  getMetrics,
  addMetrics,
  updateMetrics
};

export default AuthService;
