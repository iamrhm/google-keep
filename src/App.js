import React from "react";
import Routes from "./routes";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import { history, store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
