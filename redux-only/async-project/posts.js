const { createStore, applyMiddleware } = require("redux");
const loggerMiddleware = require("redux-logger").createLogger();

// custom middleware
const customLogger = () => {
  return (next) => {
    return (action) => {
      console.log("Action fired: ", action);
      next(action);
    };
  };
};

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
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_STARTED:
      return {
        posts: ["HTML"],
      };

    default:
      return state;
  }
};

// store
const store = createStore(postsReducer, applyMiddleware(customLogger));

// subscribe
store.subscribe(() => {
  const data = store.getState();
  console.log(data);
});

// dispatch
store.dispatch(fetchPostRequest());
