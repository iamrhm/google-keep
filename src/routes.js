import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import LandingPage from "./pages/landing";
import Search from "./pages/search";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
