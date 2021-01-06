import React, { useReducer } from "react";
import axios from "axios";
import TimelineContext from "./timelineContext";
import timelineReducer from "./timelineReducer";
import {
  ADD_POST,
  ADD_POST_ERROR,
  GET_CURRENT_USER_PROFILE,
  GET_OTHER_USER_PROFILE,
  PROFILE_NOT_FOUND,
  SET_LOADING,
  CLEAR_STATE,
  CLEAR_ERRORS,
} from "../types";

const TimelineState = (props) => {
  const initialState = {
    posts: [],
    user_data: {},
    is_following: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(timelineReducer, initialState);

  const getCurrentUserProfile = async () => {
    try {
      setLoading();
      clearError();
      const res = await axios.get("current_user_profile");
      dispatch({
        type: GET_CURRENT_USER_PROFILE,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: PROFILE_NOT_FOUND,
        payload: error.response.data.message,
      });
    }
  };

  const getOtherUserProfile = async (username) => {
    try {
      setLoading();
      clearError();
      const res = await axios.get("user_profile/" + username);
      dispatch({
        type: GET_OTHER_USER_PROFILE,
        payload: res.data,
      });
    } catch (error) {
      // console.log(error.response.data.message);
      dispatch({
        type: PROFILE_NOT_FOUND,
        payload: error.response.data.message,
      });
    }
  };

  const addPost = async (formData) => {
    const config = {
      "Content-Type": "application/json",
    };
    try {
      const res = await axios.post("/posts", formData, config);
      dispatch({
        type: ADD_POST,
        payload: res.data.post,
      });
    } catch (error) {
      dispatch({ type: ADD_POST_ERROR, payload: error.response.data.errors });
    }
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  const clearState = () => dispatch({ type: CLEAR_STATE });

  const clearError = () => dispatch({ type: CLEAR_ERRORS });
  return (
    <TimelineContext.Provider
      value={{
        posts: state.posts,
        loading: state.loading,
        user_data: state.user_data,
        is_following: state.is_following,
        error: state.error,
        getCurrentUserProfile,
        getOtherUserProfile,
        addPost,
      }}
    >
      {props.children}
    </TimelineContext.Provider>
  );
};

export default TimelineState;
