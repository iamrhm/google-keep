import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import WrapperContainer from "./pages/wrapper";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={WrapperContainer} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
