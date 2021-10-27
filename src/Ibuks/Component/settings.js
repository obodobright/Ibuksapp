import React from "react";
import styled from "styled-components";

const Settings = () => {
  return (
    <Container>
      <Wrapper>
        <ImageHolder>
          <UserImg />
          <ImgLabel htmlFor="fx">Upload Image Here</ImgLabel>
          <LabelInput type="file" id="fx" />
        </ImageHolder>
        <ContentForm>
          <LabelName>Full Name</LabelName>
          <NameInput placeholder="Full Name" />
          <LabelName>Contact Address</LabelName>
          <NameInput placeholder="Address line" />
          <LabelName>Full Name</LabelName>
          <NameInput placeholder="Full Name" />
          <LabelName>Full Name</LabelName>
          <NameInput placeholder="Full Name" />
          <LabelName>Full Name</LabelName>
          <NameInput placeholder="Full Name" />
        </ContentForm>
      </Wrapper>
    </Container>
  );
};

export default Settings;

const LabelName = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
`;
const NameInput = styled.input`
  width: 100%;
  height: 25px;
  outline: none;
  border: 1px solid gray;
  font-size: 15px;
  padding-left: 4px;
  border-radius: 5px;
`;

const ContentForm = styled.div``;
const UserImg = styled.div`
  width: 250px;
  height: 250px;
  background: red;
`;
const ImageHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LabelInput = styled.input`
  display: none;
`;
const ImgLabel = styled.label`
  width: 200px;
  height: 40px;
  background: coral;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  color: white;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    border: 1px solid coral;
    background: white;
    color: coral;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  height: 100%;
  padding: 30px 0;
`;
