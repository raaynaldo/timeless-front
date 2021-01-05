import {
  ADD_POST,
  ADD_POST_ERROR,
  GET_USER_POSTS,
  TIMELINE_ERROR,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_USER_POSTS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case ADD_POST:
      let obj = {
        ...state,
      };
      const year = new Date(action.payload.post_date).getFullYear().toString();
      if (!obj.posts[year]) {
        obj.posts[year] = [action.payload];
      } else {
        obj.posts[year].unshift(action.payload);
      }
      return obj;
    default:
      return;
  }
};
