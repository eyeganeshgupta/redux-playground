const { createStore } = require("redux");

// initial state
const initialState = {
  posts: [],
};

// actions
const REQUEST_STARTED = "REQUEST_STARTED";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILED = "FETCH_FAILED";

// actions creator
const fetchPostRequest = () => {
  return {
    type: REQUEST_STARTED,
  };
};

const fetchPostSuccess = () => {
  return {
    type: FETCH_SUCCESS,
  };
};

const fetchPostFailed = () => {
  return {
    type: FETCH_FAILED,
  };
};

// reducers
const postsReducer = (state = initialState, action) => {};

// store
const store = createStore(postsReducer);

// dispatch
