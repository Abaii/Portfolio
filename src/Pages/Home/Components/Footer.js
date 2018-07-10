import styled from "styled-components";
import React from "react";
const FooterWrapper = styled.div`
  width: 100%;
  padding: 10px;
  position: fixed;
  bottom: 0;
  background-color: #bfd9da;
  display: flex;
  justify-content: center;
  margin-left: none;
`;
const FooterText = styled.p`
  font-size: 10px;
`;
const SvgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 20%;
`;
const Svg = styled.img`
  opacity: 0.75;
  width: 35px;
  height: 35px;
  box-shadow: 10px;
`;
class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper>
        <FooterText>Abai Edmund 2018.</FooterText>
        <SvgWrapper>
          <Svg
            src="https://simpleicons.org/icons/codepen.svg"
            alt="codepen logo"
          />

          <Svg
            src="https://simpleicons.org/icons/github.svg"
            alt="github logo"
          />

          <Svg
            src="https://simpleicons.org/icons/linkedin.svg"
            alt="linkedin logo"
          />
        </SvgWrapper>
      </FooterWrapper>
    );
  }
}

export default Footer;
