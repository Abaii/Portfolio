import React from "react";
import styled from "styled-components";
import { injectGlobal } from "styled-components";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import FirstPage from "../../FirstPage/Components/FirstPage";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat|Open+Sans|Roboto+Slab');  
  html,
  body,
  #root{
    font-family: 'Roboto Slab', Arial, Helvetica, sans-serif;
    color: #1A2433;
    width:100%;
    height:100%;
    
   
  }
  button:focus {outline:0;}

    
      

`;
export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
  margin: 0 auto;
  color: #1a2433;
`;

const Home = () => (
  <Wrapper>
    <Header />
    <Body />
    <FirstPage />
    <Footer />
  </Wrapper>
);
export default Home;
