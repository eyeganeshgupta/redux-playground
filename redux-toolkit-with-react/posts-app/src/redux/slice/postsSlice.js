import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiEndpoint from "../../utils/apiEndpoint";

// * initialState
const initialState = {
  loading: false,
  posts: [],
  error: null,
};

// * action to fetch all posts
export const fetchPosts = createAsyncThunk(
  "posts/fetch",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const response = await axios.get(apiEndpoint);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

// * search post action to fetch single post
export const fetchSinglePost = createAsyncThunk(
  "post/search",
  async (id, { rejectWithValue, getState, dispatch }) => {
    try {
      const response = await axios.get(`${apiEndpoint}/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.status);
    }
  }
);

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

    // * search post
    builder.addCase(fetchSinglePost.pending, (state, action) => {
      state.loading = true;
      state.posts = [];
      state.error = null;
    });

    builder.addCase(fetchSinglePost.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = [action.payload];
      state.error = null;
    });

    builder.addCase(fetchSinglePost.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.payload;
    });
  },
});

// * generate reducer
const postsReducer = postsSlice.reducer;

export default postsReducer;
