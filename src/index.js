import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from "axios";
import AuthState from "./context/auth/AuthState";

// axios.defaults.baseURL = "http://127.0.0.1:3001/api/v1";
axios.defaults.baseURL = "https://timeless-api.herokuapp.com/api/v1";

// axios.interceptors.request.use(
//   (request) => {
//     console.log(request);
//     // Edit request config
//     return request;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   }
// );

// axios.interceptors.response.use(
//   (response) => {
//     console.log(response);
//     // Edit request config
//     return response;
//   },
//   (error) => {
//     console.log(error);
//     console.log(error.response);
//     return Promise.reject(error);
//   }
// );

ReactDOM.render(
  // <React.StrictMode>
  <AuthState>
    <App />
  </AuthState>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
