import styled from "styled-components";
import { injectGlobal } from "styled-components";
import React from "react";
import { Wrapper } from "../../Home/Components/HomePage";
import Body from "././NavBody";
import Header from "./../../Home/Components/Header";
import Footer from "../../Home/Components/Footer";
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Slab');
  html,
  body,
  #root{
    font-family: 'Roboto Slab', Arial, Helvetica, sans-serif;
    color: #1A2433;
    width:100%;
    height:100%;
    
    
   
  }
    
      

`;

const FirstPage = props => (
  <Wrapper>
    <Body />
    <Footer />
  </Wrapper>
);
export default FirstPage;
