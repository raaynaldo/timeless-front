import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import setAuthToken from "../../utils/setAuthToken";
import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  UPDATE_USER,
} from "../types";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
    validation: {},
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //Load User
  const loadUser = async () => {
    setAuthToken(localStorage.token);

    try {
      const res = await axios.get("/profile");
      dispatch({
        type: USER_LOADED,
        payload: res.data.user,
      });
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };

  // SignUp User
  const signup = async (formData) => {
    const config = {
      "Content-Type": "application/json",
    };

    try {
      const res = await axios.post("/users", formData, config);
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
      loadUser();
    } catch (error) {
      dispatch({ type: SIGNUP_FAIL, payload: error.response.data.errors });
    }
  };

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
      loadUser();
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.errors,
      });
    }
  };

  const updateUser = async(formData) => {
    const config = {
      "Content-Type": "application/json",
    };

    try {
      const res = await axios.post("/upload_image", formData, config);
      dispatch({
        type: UPDATE_USER,
        payload: res.data.image,
      });
    } catch (error) {
      // dispatch({
      //   type: LOGIN_FAIL,
      //   payload: error.response.data.errors,
      // });
    }
  }

  // Logout
  const logout = () => dispatch({ type: LOGOUT });

  // Clear errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        validation: state.validation,
        loadUser,
        signup,
        login,
        logout,
        clearErrors,
        updateUser
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
