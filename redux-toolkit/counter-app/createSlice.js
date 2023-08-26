const { createSlice, configureStore } = require("@reduxjs/toolkit");

// TODO: initialState
const initialState = {
  counter: 0,
};

// TODO: createSlice
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment
    increment: (state, action) => {
      state.counter = state.counter + 1;
    },
    // decrement
    decrement: (state, action) => {
      state.counter = state.counter - 1;
    },
    // reset
    reset: (state, action) => {
      state.counter = 0;
    },
    // incrementBy
    incrementByAmount: (state, action) => {
      state.counter = state.counter + action.payload;
    },
  },
});

// ? Generate Actions
const { increment, decrement, reset, incrementByAmount } = counterSlice.actions;

// ? Generate Reducer
const counterReducer = counterSlice.reducer;

// TODO: store
const store = configureStore({
  reducer: counterReducer,
});

// ? dispatch action
store.dispatch(reset());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(incrementByAmount(250));

console.log(store.getState());
