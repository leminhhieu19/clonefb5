import React, { memo } from "react";
import {  Link } from "react-router-dom";
import styled from "styled-components";
import "../Login.css";
import LoginInput from "./LoginInput";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const SLink = styled(Link)`
    font-size: 14px;
    margin-top: 3px;
`

const SubmitButton = styled.button`
    height: 32px;
    margin-top: 24px;
    background-color: #4267b2;
    color: #fff;
    font-weight: bold;
    border-color: #29487d;
    cursor: pointer;
    &:hover{
        background-color: #365899;
        border-color: #29487d;
    }
`

const ForgotPassword = memo(function() {
    return <SLink>Quên mật khẩu</SLink>
})



class LoginForm extends React.PureComponent {
  
    constructor(props) {
        super(props);
        this.state = {
            email: 'Fis123456',
            password: 'Fis123456'
        }
    }

    submit = () => {
        localStorage.setItem('token', '1')
        window.location = 'http://localhost:3000/home'
    }

  render() {
    return (
      <Wrapper>
        <LoginInput label="Email hoặc số điện thoại" />
        <LoginInput label="Mật khẩu" FooterElement={<ForgotPassword />} />
        <SubmitButton onClick={this.submit}>Đăng nhập</SubmitButton>
      </Wrapper>
    );
  }
}

export default LoginForm;
