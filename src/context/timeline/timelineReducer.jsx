import {
  ADD_POST,
  ADD_POST_ERROR,
  GET_CURRENT_USER_PROFILE,
  GET_OTHER_USER_PROFILE,
  FOLLOW_UNFOLLOW,
  PROFILE_NOT_FOUND,
  SET_LOADING,
  CLEAR_STATE,
  CLEAR_ERRORS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_CURRENT_USER_PROFILE:
      return {
        ...state,
        posts: action.payload.posts,
        user_data: action.payload.user_data,
        loading: false,
      };
    case GET_OTHER_USER_PROFILE:
      return {
        ...state,
        posts: action.payload.posts,
        user_data: action.payload.user_data,
        is_following: action.payload.is_following,
        loading: false,
      };
    case PROFILE_NOT_FOUND:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ADD_POST:
      let obj = {
        ...state,
        loading: false,
      };
      const year = new Date(action.payload.post_date).getFullYear().toString();
      if (!obj.posts[year]) {
        obj.posts[year] = [action.payload];
      } else {
        obj.posts[year].unshift(action.payload);
      }
      return obj;
    case ADD_POST_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    case FOLLOW_UNFOLLOW:
      return {
        ...state,
        is_following: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    case CLEAR_STATE:
      return {
        posts: [],
        user_data: {},
        is_following: null,
        loading: true,
        error: null,
      };
    default:
      return;
  }
};
