import * as actionTypes from "../actionTypes";

export const initialDisplayPanelState = {
  showArchived: false
};

export default (state = initialDisplayPanelState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_DISPLAY_PANEL:
      return {
        ...state,
        displayPanelStatus: action.payload.displayPanelStatus
      };
    default:
      return state;
  }
};
