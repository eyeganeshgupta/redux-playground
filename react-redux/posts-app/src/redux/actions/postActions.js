import axios from "axios";
import apiEndpoint from "../../utils/apiEndpoint";
import {
  FETCH_POSTS_ERROR,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POST_ERROR,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from "./postActionTypes";

// request started action creator
const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

// success action creator
const fetchPostsSuccess = (posts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
  };
};

// error action creator
const fetchPostsError = (error) => {
  return {
    type: FETCH_POSTS_ERROR,
    payload: error,
  };
};

// --- fetch all post action
export const fetchPostsAction = () => {
  return async (dispatch) => {
    // request action
    dispatch(fetchPostsRequest());
    try {
      // make http request
      const response = await axios.get(apiEndpoint);
      // success action
      dispatch(fetchPostsSuccess(response.data));
    } catch (error) {
      // error action
      dispatch(fetchPostsError(error));
    }
  };
};

// ------- single post -------

// request action
const fetchSinglePostRequest = () => {
  return {
    type: FETCH_POST_REQUEST,
  };
};

// success action creator
const fetchSinglePostSuccess = (post) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: post,
  };
};

// error action creator
const fetchSinglePostError = (error) => {
  return {
    type: FETCH_POST_ERROR,
    payload: error,
  };
};

// --- fetch single post action
export const fetchSinglePostAction = (id) => {
  return async (dispatch) => {
    // request action
    dispatch(fetchSinglePostRequest());
    try {
      // make http request
      const response = await axios.get(`${apiEndpoint}/${id}`);
      // success action
      dispatch(fetchSinglePostSuccess(response.data));
    } catch (error) {
      // error action
      dispatch(fetchSinglePostError(error));
    }
  };
};
