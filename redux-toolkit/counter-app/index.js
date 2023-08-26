const {
  createAction,
  createReducer,
  configureStore,
} = require("@reduxjs/toolkit");

// TODO: initialState
const initialState = {
  counter: 0,
};

// TODO: Action Creator - Action
const increment = createAction("INCREMENT");
const decrement = createAction("DECREMENT");
const resetCounter = createAction("RESET");
// Customise createAction
const incrementBy = createAction("INCREMENT_BY", (amount) => {
  return {
    payload: amount,
  };
});

// TODO: Reducer
// 1. Builder callback notation
const counterSlice = createReducer(initialState, (builder) => {
  // increment
  builder.addCase(increment, (state) => {
    state.counter = state.counter + 1;
  });

  // decrement
  builder.addCase(decrement, (state) => {
    state.counter = state.counter - 1;
  });

  // reset
  builder.addCase(resetCounter, (state) => {
    state.counter = 0;
  });

  // incrementByAmount
  builder.addCase(incrementBy, (state, action) => {
    state.counter = state.counter + action.payload;
  });
});

// 2. map object notation
/*
const counterSliceMapObjectNotation = createAction(initialState, {
  [increment]: (state) => {
    state.counter = state.counter + 1;
  },
  [decrement]: (state) => {
    state.counter = state.counter - 1;
  },
  [resetCounter]: (state) => {
    state.counter = 0;
  },
  [incrementBy]: (state, action) => {
    state.counter = state.counter + action.payload;
  },
});
*/

// * The recommended way of using createReducer is the builder callback notation, as it works best with TypeScript and most IDEs.

// TODO: Store
const store = configureStore({
  reducer: counterSlice,
});

// TODO: dispatch action
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(incrementBy(100));

console.log(store.getState());
