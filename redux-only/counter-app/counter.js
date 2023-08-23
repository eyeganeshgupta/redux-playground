// Step 01: Initial State
const initialState = {
  count: 0,
};

// Step 02: Actions
// |- Action
/*
    |- Action type
        1. increment
        2. decrement
        3. reset
        4. increaseByAmount
*/

// |- Action creator
const incrementAction = () => {
  return {
    type: "INCREMENT",
  };
};

const decrementAction = () => {
  return {
    type: "DECREMENT",
  };
};

const resetAction = () => {
  return {
    type: "RESET",
  };
};

const increaseByAmountAction = (increaseBy) => {
  return {
    type: "INCREASE_BY_AMOUNT",
    payload: increaseBy,
  };
};

// Step 03: reducer
const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
    };
  } else if (action.type === "RESET") {
    return {
      count: 0,
    };
  } else if (action.type === "INCREASE_BY_AMOUNT") {
    return {
      count: state.count + action.payload,
    };
  } else {
    return state;
  }
};

// Step 04: store
