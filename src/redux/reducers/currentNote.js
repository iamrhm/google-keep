import * as actionTypes from "../actionTypes";

export const initialCurrentNoteState = {
  id: "",
  title: "",
  content: "",
  isArchived: false,
  isPinned: false
};

export default (state = initialCurrentNoteState, action) => {
  switch (action.type) {
    case actionTypes.POPULATE_NOTE_INFO:
      return { ...state, ...action.payload.note };
    default:
      return state;
  }
};
