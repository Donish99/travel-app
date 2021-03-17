import React from "react";
import Footer from "../Footer";
import styled from "styled-components";
import ImageInfo from "./ImageInfo";
import Images from "./Images";

const ContentDiv = styled.div`
  width: 100%;
  height: calc(100% - 45px);
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const CountryContent = ({ lang, data }) => {
  const language = localStorage.getItem("language");
  return (
    <>
      <ContentDiv>
        <ImageInfo img={data.images[0]} info={data[language].info} />
        {/* <Images img={data.images} /> */}
      </ContentDiv>
      <Footer />
    </>
  );
};

export default CountryContent;
