import { all } from "redux-saga/effects";

import noteSagas from "./note";

function* mainSaga() {
  yield all([noteSagas()]);
}

export default mainSaga;
