import { put, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../actionTypes";
import { populateDisplayPanel } from "../actions";

function* updateDisplay(displayPanelStatus) {
  try {
    yield put(populateDisplayPanel({ displayPanelStatus: displayPanelStatus }));
  } catch (err) {
    throw new Error(err);
  }
}

function* displayPanelSagas() {
  yield takeLatest(actionTypes.UPDATE_DISPLAY_PANEL, updateDisplay);
}

export default displayPanelSagas;
