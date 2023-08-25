import { ADD_NOTE, DELETE_NOTE, FETCH_NOTES } from "./notesActionTypes";

// add note action creator
export const addNoteAction = (noteObj) => {
  return {
    type: ADD_NOTE,
    payload: noteObj,
  };
};

// delete note action creator
export const deleteNoteAction = (id) => {
  return {
    type: DELETE_NOTE,
    payload: id,
  };
};

// fetch notes action creator
export const fetchNotesAction = () => {
  return {
    type: FETCH_NOTES,
  };
};
