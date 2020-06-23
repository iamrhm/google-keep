import * as actionTypes from "../actionTypes";

export const initialAllNoteState = [
  {
    id: "",
    title: "",
    content: "",
    isArchived: false,
    isPinned: false
  }
];

export default (state = initialAllNoteState, action) => {
  switch (action.type) {
    case actionTypes.POPULATE_ALL_NOTES:
      return { ...state, allNotes: action.payload.notes };
    default:
      return state;
  }
};
