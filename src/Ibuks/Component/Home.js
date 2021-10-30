import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Container>
      <Wrapper>Welcme to Ibuks App</Wrapper>
    </Container>
  );
};

export default Home;
const Wrapper = styled.div``;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;
