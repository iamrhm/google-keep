import { combineReducers } from "redux";
import CurrentNoteReducer, { initialCurrentNoteState } from "./currentNote";
import AllNoteReducer, { initialAllNoteState } from "./allNotes";

import DisplayPanelReducer, {
  initialDisplayPanelState
} from "../reducers/display-panel";

export const initialState = {
  allNotes: initialAllNoteState,
  currentNote: initialCurrentNoteState,
  displayPanelStatus: initialDisplayPanelState
};

const reducer = () =>
  combineReducers({
    allNotes: AllNoteReducer,
    currentNote: CurrentNoteReducer,
    displayPanelStatus: DisplayPanelReducer
  });

export default reducer;
