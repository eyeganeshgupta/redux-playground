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

      // add note into localStorage
      const updatedNotes = [...state.notes, newNote];
      localStorage.setItem("notes", JSON.stringify(updatedNotes));

      return {
        notes: [...state.notes, newNote],
      };

    case DELETE_NOTE:
      const filteredNotes = state.notes.filter((eachNote) => {
        return eachNote.id !== action.payload;
      });

      // resave to localStorage
      localStorage.setItem("notes", JSON.stringify(filteredNotes));

      return {
        ...state,
        notes: filteredNotes,
      };

    case FETCH_NOTES:
      return {
        notes: JSON.parse(localStorage.getItem("notes"))
          ? JSON.parse(localStorage.getItem("notes"))
          : [],
      };

    default:
      return state;
  }
};

export default notesReducer;
