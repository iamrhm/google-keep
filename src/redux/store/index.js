import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { createHashHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension";
import { routerMiddleware } from "connected-react-router";

import reducer from "../reducers";
import rootSaga from "../sagas";

export const history = createHashHistory({
  hashType: "slash"
});

export const sagaMiddleware = createSagaMiddleware();

export const middlewares = [sagaMiddleware, routerMiddleware(history)];

const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

export const store = createStore(reducer(history), enhancer);

sagaMiddleware.run(rootSaga);
