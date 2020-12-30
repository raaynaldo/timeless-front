import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: false,
    user: null,
    errors: {},
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //Load User

  // Register User

  // Login User
  const login = async (formData) => {
    const config = {
      "Content-Type": "application/json",
    };

    try {
      const res = await axios.post("/login", formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.errors,
      });
    }
  };

  // Logout

  // Clear errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        errors: state.errors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
