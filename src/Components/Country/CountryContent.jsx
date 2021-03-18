import React from "react";
import Footer from "../Footer";
import styled from "styled-components";
import ImageInfo from "./ImageInfo";
import Images from "./Images";
import ReactPlayer from "react-player";
import CountryMap from "./CountryMap";

const ContentDiv = styled.div`
  width: 100%;
  height: calc(100% - 45px);
  overflow-y: scroll;
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
        {/* <ImageInfo
          name={data[language].name}
          capital={data[language].capital}
          img={data.images[0]}
          info={data[language].info}    
        /> */}
        {/* <Images img={data.images} /> */}
        <ReactPlayer
          controls={true}
          url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
        />
        <div style={{ height: 500, width: 500 }}>
          <CountryMap position={data.capitalMarker} />
        </div>
      </ContentDiv>
      <Footer />
    </>
  );
};

export default CountryContent;
