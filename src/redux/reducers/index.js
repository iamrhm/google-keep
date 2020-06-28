import { combineReducers } from "redux";
import CurrentNoteReducer, { initialCurrentNoteState } from "./currentNote";
import AllNoteReducer, { initialAllNoteState } from "./allNotes";

export const initialState = {
  allNotes: initialAllNoteState,
  currentNote: initialCurrentNoteState
};

const reducer = () =>
  combineReducers({
    allNotes: AllNoteReducer,
    currentNote: CurrentNoteReducer
  });

export default reducer;
