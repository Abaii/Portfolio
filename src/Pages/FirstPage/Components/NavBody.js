import React from "react";
import styled from "styled-components";
import Image from "./Image";
import Edu from "../../images/education.jpg";
import Skills from "../../images/skills.jpg";
import Exp from "../../images/exp.jpg";
import { BodyWrapper } from "./../../Home/Components/Body";


const ImageFlex = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-left: 20px;
  background-color: white;
`;

const ImageDiv = styled.div`
  position: relative;
  width: 30%;
  margin-top: 10px;

  padding: 5px;
  background-color: #f6f6f6;
  &:hover :first-child {
    transition: opacity 0.5s ease-in;

    opacity: 0.5;
  }
  &:hover > h1 {
    transition: color 0.5s ease-in;
    color: #1a2433;
    font-weight: 600;
  }
`;
const ImageText = styled.h1`
  position: absolute;
  top: 150px;
  text-align: center;
  font-size: 42px;
  width: 100%;
  margin: 0 auto;
  color: transparent;
  text-transform: uppercase;
`;

class NavBody extends React.Component {
  render() {
    return (
      <BodyWrapper>
        <ImageFlex>
          <ImageDiv>
            <Image src={Edu} alt="Education" />
            <ImageText>Education</ImageText>
          </ImageDiv>
          <ImageDiv>
            <Image src={Skills} alt="skills" />
            <ImageText mid>Skills</ImageText>
          </ImageDiv>
          <ImageDiv>
            <Image src={Exp} alt="experience" />
            <ImageText>Experience</ImageText>
          </ImageDiv>
        </ImageFlex>
      </BodyWrapper>
    );
  }
}
export default NavBody;
