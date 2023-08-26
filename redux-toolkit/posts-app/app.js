const axios = require("axios");
const {
  createAsyncThunk,
  createSlice,
  configureStore,
} = require("@reduxjs/toolkit");

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

// * initialState
const initialState = {
  loading: false,
  posts: [],
  error: null,
};

// * create async thunk
const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await axios.get(apiEndpoint);
  return response.data;
});

// * slice
const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    // TODO: Handle lifecycle - pending, fulfilled, rejected
    // ? pending
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
      state.posts = [];
      state.error = null;
    });

    // ? fulfilled
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
      state.error = null;
    });

    // ? rejected
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.payload;
    });
  },
});

// * generate reducer
const postsReducer = postsSlice.reducer;

// * store
const store = configureStore({
  reducer: postsReducer,
});

// * subscribe
store.subscribe(() => {
  console.log(store.getState());
});

// * dispatch
store.dispatch(fetchPosts());
