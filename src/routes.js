import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import WrapperContainer from "./pages/wrapper";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div>
          <Sidebar />
          <Switch>
            <Route exact path="/" component={WrapperContainer} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
