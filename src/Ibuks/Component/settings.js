import React, { useState, useEffect } from "react";
import styled from "styled-components";
import placeholder from "../asset/placeholder.png";
import db from "../helpers/firebase";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/react";

const Settings = () => {
  const [img, setImg] = useState(placeholder);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [occupation, setOccupation] = useState("");
  const [email, setEmail] = useState("");
  const [datacount, setDatacount] = useState(0.0001);

  const onImageChange = async (e) => {
    const file = e.target.files[0];
    const saveImage = URL.createObjectURL(file);
    setImg(saveImage);

    // to upload
    // create a reference
    const storage = getStorage();
    const storageRef = ref(storage, "ibukFile/ " + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Manage the flow of Data
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setDatacount(progress);
        console.log(progress + "%" + " uploaded");
      },
      (err) => {
        console.log(err.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
        });
      }
    );
  };
  // Submit data by posting to backend
  const onSubmitToPostData = async () => {
    const collectionRef = collection(db, "ibuksapp");
    const payload = { address, firstname, lastname, phone, email, occupation };
    await addDoc(collectionRef, payload);

    setImg(placeholder);
    setEmail("");
    setFirstname("");
    setLastname("");
    setPhone("");
    setOccupation("");
    setAddress("");
  };

  return (
    <Container>
      <Wrapper>
        <ImageHolder>
          {/* <div>{`Picture Upload ${Math.floor(datacount)}%`}</div> */}
          {datacount >= 1 && datacount < 99.9 ? (
            <div style={{ position: "relative", top: "100px" }}>
              <FadeLoader />
            </div>
          ) : null}
          {datacount >= 1 && datacount < 99.9 ? <UserVeil /> : null}

          <UserImg src={img} />
          <ImgLabel htmlFor="fx">Upload Image Here</ImgLabel>
          <LabelInput type="file" id="fx" onChange={onImageChange} />
        </ImageHolder>
        <ContentForm>
          <LabelName>First Name</LabelName>
          <NameInput
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <LabelName>Last Name</LabelName>
          <NameInput
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <LabelName>Contact Address</LabelName>
          <NameInput
            placeholder="Address line"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <LabelName>Phone Number</LabelName>
          <NameInput placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <LabelName>Occupation</LabelName>
          <NameInput
            placeholder="Occupation"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
          <LabelName>Email addres</LabelName>
          <NameInput placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <ImgLabel onClick={onSubmitToPostData}>Submit</ImgLabel>
        </ContentForm>
      </Wrapper>
    </Container>
  );
};

export default Settings;

const UserVeil = styled.div`
  width: 250px;
  height: 250px;
  object-fit: cover;
  background: white;
  position: absolute;
  opacity: 0.5;
`;

const LabelName = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 15px;
`;
const NameInput = styled.input`
  width: 100%;
  height: 40px;
  outline: none;
  border: 1px solid #d1c9c9;
  font-size: 15px;
  padding-left: 4px;
  border-radius: 5px;
`;

const ContentForm = styled.div`
  width: 400px;
`;
const UserImg = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
`;
const ImageHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
`;
const LabelInput = styled.input`
  display: none;
`;
const ImgLabel = styled.label`
  width: 200px;
  height: 30px;
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
  // flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  height: 100%;
  padding: 30px 0;
`;
