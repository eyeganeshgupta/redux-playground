import {
  FETCH_POSTS_ERROR,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POST_ERROR,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from "../actions/postActionTypes";

// initialState
const initialState = {
  loading: false,
  posts: [],
  post: {},
  error: "",
};

// reducers
export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    // ==== fetch/search all posts
    case FETCH_POSTS_REQUEST:
      return {
        loading: true,
        posts: [],
        post: {},
        error: "",
      };

    case FETCH_POSTS_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
        post: {},
        error: "",
      };

    case FETCH_POSTS_ERROR:
      return {
        loading: false,
        posts: [],
        post: {},
        error: action.payload,
      };

    // ==== fetch/search single post
    case FETCH_POST_REQUEST:
      return {
        loading: true,
        posts: [],
        post: {},
        error: "",
      };

    case FETCH_POST_SUCCESS:
      return {
        loading: false,
        posts: [action.payload],
        post: {},
        error: "",
      };

    case FETCH_POST_ERROR:
      return {
        loading: false,
        posts: [],
        post: {},
        error: action.payload,
      };

    default:
      return state;
  }
};
