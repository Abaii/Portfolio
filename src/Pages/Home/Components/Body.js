import styled, { keyframes } from "styled-components";
import React from "react";
import NavBar from "./Navbar";
export const BodyWrapper = styled.div`
  width: 100%;
  background-color: #ddecef;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const appear = keyframes`
  from{
    color:transparent;
  }
  to{
    color: #1A2433;
  }
`;
const disappear = keyframes`
  0%{
    
  }
  100%{
    visibility:hidden;
  }
`;
const IntroDiv = styled.div`
  width: 100%;
  margin-top: 10em;
  display: block;
  animation: ${disappear} 1s forwards;
`;
const Intro = styled.span`
  font-size: 100px;
  color: transparent;
  margin-left: 5em;
  margin-bottom: 8em;
  padding: none;
  font-weight: 400;
  line-height: 2;
  letter-spacing: 1px;
  text-transform: capitalize;
  animation: ${appear} 0.5s forwards;
`;

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BodyWrapper>
        <IntroDiv>
          <Intro>Portfolio</Intro>
        </IntroDiv>
        <NavBar />
      </BodyWrapper>
    );
  }
}

export default Body;
