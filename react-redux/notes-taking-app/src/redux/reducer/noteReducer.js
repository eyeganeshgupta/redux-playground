import {
  ADD_NOTE,
  DELETE_NOTE,
  FETCH_NOTES,
} from "../actions/notesActionTypes";

// initialState
const initialState = {
  notes: [],
};

// note reducer
const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      const newNote = {
        id: Math.random().toFixed(6),
        title: action.payload.title,
        content: action.payload.content,
      };
      return {
        notes: [...state.notes, newNote],
      };

    default:
      return state;
      break;
  }
};

export default notesReducer;
