import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

import CurrentNoteReducer, { initialCurrentNoteState } from "./currentNote";
import AllNoteReducer, { initialAllNoteState } from "./allNotes";

import DisplayPanelReducer, {
  initialDisplayPanelState
} from "../reducers/display-panel";

export const initialState = {
  allNotes: initialAllNoteState,
  currentNote: initialCurrentNoteState,
  displayPanelStatus: initialDisplayPanelState,
  router: {}
};

const reducer = (history) =>
  combineReducers({
    allNotes: AllNoteReducer,
    currentNote: CurrentNoteReducer,
    displayPanelStatus: DisplayPanelReducer,
    router: connectRouter(history)
  });

export default reducer;
