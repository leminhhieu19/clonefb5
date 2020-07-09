import React, { memo } from "react";
import styled from "styled-components";
import "../Login.css";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10px;
`;

const Label = styled.span`
    color: #fff;
    font-size: 14px;
`;

const TextInput = styled.input`
    margin-top: 7px;
    height: 26px;
`;

const LoginInput = memo(function ({label, textInputProps, FooterElement}) {
  return (
    <Wrapper>
        <Label>{label}</Label>
        <TextInput {...textInputProps} />
        {FooterElement}
    </Wrapper>
  );
});

export default LoginInput;
