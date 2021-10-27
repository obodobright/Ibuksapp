import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./nav";
import Settings from "./settings";

const Home = () => {
  return (
    <Container>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/settings" exact component={Settings}></Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default Home;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
