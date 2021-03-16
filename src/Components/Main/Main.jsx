import React from "react";
import styled from "styled-components";
import Content from "./Content";
import Navigation from "./Navigation";

const MainDiv = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const ContentDiv = styled.div`
  width: 100%;
  height: 95%;
`;

const Main = ({ lang, handleLangChange }) => {
  return (
    <MainDiv>
      <Navigation lang={lang} handleLangChange={handleLangChange} />
      <ContentDiv>
        <Content lang={lang} />
      </ContentDiv>
    </MainDiv>
  );
};

export default Main;
