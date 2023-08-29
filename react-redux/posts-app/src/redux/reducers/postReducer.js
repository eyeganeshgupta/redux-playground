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
