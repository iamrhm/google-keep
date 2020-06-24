import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "../reducers";
import rootSaga from "../sagas";

export const sagaMiddleware = createSagaMiddleware();

export const middlewares = [sagaMiddleware];

const enhancer = composeWithDevTools(applyMiddleware(...middlewares));

export const store = createStore(reducer(), enhancer);

sagaMiddleware.run(rootSaga);
