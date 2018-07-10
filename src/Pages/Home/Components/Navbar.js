import styled, { keyframes } from "styled-components";
import React from "react";
import Footer from "./Footer";
import Edu from "./../../images/edu.jpeg";

const fadeIn = keyframes`
    0%{
        opacity: 0; 
        transform: translateY(0); 
    }
    100%{
        opacity: 1; 
        transform: translateY(-350px);
    }
`;
const NavBarDiv = styled.div`
  align-self: center;
  background-color: #ddecef;
  width: 100%;
  animation: ${fadeIn} 1s forwards;
  animation-delay: 3s;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const OptionDiv = styled.div`
  &:hover {
    opacity: 0.75;
  }
  &:hover > ImgDiv {
    opacity: 1;
  }
`;
const Images = styled.img`
  opacity: 0;
  height: 200px;
  width: 200px;
`;
const ImgDiv = styled.div`
  opacity: 1;
  &:hover > Images {
    opacity: 1;
  }
`;
const NavBarOption = styled.button`
  font-size: 52px;
  font-weight: bold;
  background-color: #ddecef;
  text-transform: uppercase;
  border: none;
  line-height: 2;
  letter-spacing: 2px;
  text-align: center;
  padding: 10px;
  &:hover {
    opacity: 0.75;
    color: #87aaae;
  }
`;

class NavBar extends React.Component {
  render() {
    return (
      <NavBarDiv>
        <NavBarOption>About me </NavBarOption>
        <OptionDiv>
          <NavBarOption>Education </NavBarOption>
          <ImgDiv>
            <Images src={Edu} alt="education" />
          </ImgDiv>
        </OptionDiv>
        <NavBarOption>Experience </NavBarOption>
        <NavBarOption>Projects</NavBarOption>
        <NavBarOption>Contact me </NavBarOption>
      </NavBarDiv>
    );
  }
}

export default NavBar;
