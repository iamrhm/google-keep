import * as actionTypes from "../actionTypes";

export const initialAllNoteState = [];

export default (state = initialAllNoteState, action) => {
  switch (action.type) {
    case actionTypes.POPULATE_ALL_NOTES:
      return [...action.payload.notes];
    default:
      return state;
  }
};
