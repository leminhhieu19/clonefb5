import React, { memo } from "react";
import styled from "styled-components";
import "../Login.css";
import LoginForm from "./LoginForm";

const Wrapper = styled.div`
  width: 100%;
  background-color: #3b5998;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;
const img1 = {
  left: "20px",
  height: "50px",
  top: "5px",
};

function HeaderImage() {
  return (
    <div style={img1}>
      <img src="facebook.png" alt="" />
    </div>
  );
}

const HeaderLogin = memo(function () {
  return (
    <Wrapper>
      <Container>
        <HeaderImage />
        <LoginForm />
      </Container>
    </Wrapper>
  );
});

export default HeaderLogin;
