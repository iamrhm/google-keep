import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container, Wrapper } from "./style";

import WrapperContainer from "./pages/wrapper";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

const Routes = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header />
        <Container>
          <Sidebar />
          <Switch>
            <Route exact path="/" component={WrapperContainer} />
          </Switch>
        </Container>
      </Wrapper>
    </BrowserRouter>
  );
};

export default Routes;
