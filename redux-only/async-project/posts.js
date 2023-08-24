const { createStore, applyMiddleware } = require("redux");
// const loggerMiddleware = require("redux-logger").createLogger();
const thunk = require("redux-thunk").default;
const axios = require("axios");

// custom middleware
/*
const customLogger = () => {
  return (next) => {
    return (action) => {
      console.log("Action fired: ", action);
      next(action);
    };
  };
};
*/

// initial state
const initialState = {
  loading: false,
  posts: [],
  error: "",
};

// action constants
const REQUEST_STARTED = "REQUEST_STARTED";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAILED = "FETCH_FAILED";

// actions creator
const fetchPostRequest = () => {
  return {
    type: REQUEST_STARTED,
  };
};

const fetchPostSuccess = (posts) => {
  return {
    type: FETCH_SUCCESS,
    payload: posts,
  };
};

const fetchPostFailed = (error) => {
  return {
    type: FETCH_FAILED,
    payload: error,
  };
};

// action to make the request
const fetchPosts = () => {
  return async (dispatch) => {
    try {
      // dispatch fetchPostRequest
      dispatch(fetchPostRequest());

      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      // dispatch fetchPostSuccess
      dispatch(fetchPostSuccess(response));
    } catch (error) {
      // dispatch fetchPostFailed
      dispatch(fetchPostFailed(error.message));
    }
  };
};

// reducers
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        ...state,
        loading: true,
      };

    case FETCH_SUCCESS:
      return {
        posts: action.payload,
        loading: false,
        error: "",
      };

    case FETCH_FAILED:
      return {
        error: action.payload,
        posts: [],
        loading: false,
      };

    default:
      return state;
  }
};

// store
const store = createStore(postsReducer, applyMiddleware(thunk));

// subscribe
store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

// dispatch
store.dispatch(fetchPosts());
