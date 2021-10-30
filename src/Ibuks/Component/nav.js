import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiHomeCircle } from "react-icons/bi";
import { FaServicestack, FaSignInAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <LogoImg />
        <Navigation>
          <Nav to="/">
            <span>
              <BiHomeCircle />
            </span>
            Home
          </Nav>
          <Nav to="/settings">
            <span>
              <FaServicestack />
            </span>
            Settings
          </Nav>
          <Nav to="/login">
            <span>
              <FaSignInAlt />
            </span>
            Login
          </Nav>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Nav = styled(Link)`
  font-size: 16px;
  color: white;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin: 0 20px;
  text-decoration: none;
  span {
    margin: 0 3px;
  }
`;
const Navigation = styled.div`
  display: flex;
  align-items: center;
`;
const LogoImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  margin: 0 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 80px;
  background: coral;
`;
