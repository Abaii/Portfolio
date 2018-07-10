import styled, { keyframes } from "styled-components";
import React from "react";
import Button from "./Button";
import Time from "./Timer";

const FadeIn = keyframes`
    0%{
        opacity: 0; 
        transform: translateY(-150px);
    }
    100%{
        opacity: 1;
        transform: translateY(0px);
    }
`;
const HeaderWrapper = styled.div`
  width: 100%;
  height: 20%;
  padding: none;
  opacity: 0;
  margin: 0;
  animation: ${FadeIn} 1s forwards;
  animation-delay: 3s;
`;
const Title = styled.p`
  font-size: 64px;
  text-align: center;
  position: absolute;
  left: 0%;
  font-weight: 200;
  margin-left: 0.37em;

  letter-spacing: -2px;
`;
const HR = styled.hr`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;
const Header = props => (
  <HeaderWrapper light>
    <Time />

    <HR />
    <Title> A. Edmund </Title>
  </HeaderWrapper>
);

export default Header;
