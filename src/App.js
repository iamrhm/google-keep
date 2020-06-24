import React from "react";
import Routes from "./routes";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
