import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:3001",
});

instance.defaults.headers.common["Authorization"] =
  "Bearer " + localStorage.token;

instance.interceptors.request.use(
  (request) => {
    console.log(request);
    // Edit request config
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log(response);
    // Edit request config
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;
