import React, { useReducer } from "react";
import axios from "axios";
import TimelineContext from "./timelineContext";
import timelineReducer from "./timelineReducer";
import {
  ADD_POST,
  ADD_POST_ERROR,
  GET_USER_POSTS,
  TIMELINE_ERROR,
} from "../types";

const TimelineState = (props) => {
  const initialState = {
    posts: [],
    loading: true,
  };

  const [state, dispatch] = useReducer(timelineReducer, initialState);

  const getUserPosts = async (user_id) => {
    try {
      const res = await axios.get(`/user_posts/${user_id}`);
      dispatch({
        type: GET_USER_POSTS,
        payload: res.data.posts,
      });
    } catch (error) {
      dispatch({
        type: TIMELINE_ERROR,
        // payload: error.response.data.err
      });
    }
  };

  const addPost = async (formData) => {
    const config = {
      "Content-Type": "application/json",
    };
    try {
      const res = await axios.post("/posts", formData, config);
      // const res = {
      //   data: {
      //     post: {
      //       body: "okay",
      //       post_date: "2023-01-06T01:16:57.907Z",
      //     },
      //   },
      // };
      dispatch({
        type: ADD_POST,
        payload: res.data.post,
      });
    } catch (error) {
      dispatch({ type: ADD_POST_ERROR, payload: error.response.data.errors });
    }
  };

  return (
    <TimelineContext.Provider
      value={{
        posts: state.posts,
        loading: state.loading,
        getUserPosts,
        addPost,
      }}
    >
      {props.children}
    </TimelineContext.Provider>
  );
};

export default TimelineState;
