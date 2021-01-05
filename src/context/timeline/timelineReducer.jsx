import {
  ADD_POST,
  ADD_POST_ERROR,
  GET_USER_POSTS,
  TIMELINE_ERROR,
  SET_LOADING,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_USER_POSTS:
      return {
        ...state,
        posts: action.payload,
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
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return;
  }
};
