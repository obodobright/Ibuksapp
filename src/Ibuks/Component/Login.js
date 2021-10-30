import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <form>
          <h1>Sign In </h1>
          <Input type="text" placeholder="Username" />
          <Input type="password" placeholder="password" />
          <Button>Sign In</Button>
        </form>
      </Wrapper>
    </Container>
  );
};

export default Login;

const Button = styled.div`
  width: 70%;
  height: 40px;
  background: #fd7f50;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
const Input = styled.input`
  width: 100%;
  height: 40px;
  margin: 10px 0;
  outline: none;
  border: 1px solid #fd7f50;
  border-radius: 10px;
  padding-left: 10px;
  font-size: 17px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
`;
