import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./nav";
import Settings from "./settings";
import Home from "./Home";
import Login from "./Login";

const Main = () => {
  return (
    <Container>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/settings" exact component={Settings}></Route>
          <Route path="/login" exact component={Login}></Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default Main;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
