import { all } from "redux-saga/effects";

import noteSagas from "./note";
import displayPanelSagas from "./display-panel";

function* mainSaga() {
  yield all([noteSagas(), displayPanelSagas()]);
}

export default mainSaga;
