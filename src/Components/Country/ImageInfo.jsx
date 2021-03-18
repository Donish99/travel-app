import React from "react";
import styled from "styled-components";

const ImageInfoDiv = styled.div`
  width: 90%;
  box-shadow: 0 0 8px;
`;

const CustomH2 = styled.h2`
  /* text-align: center; */
  margin: 15px;
`;
const CustomH3 = styled.h3`
  /* text-align: center; */
  margin: 15px;
`;

const CustomImg = styled.img`
  width: 100%;
`;

const CustomP = styled.p`
  text-align: center;
  font-size: 20px;
  margin: 1em;
  line-height: 30px;
  word-spacing: 10px;
`;

const ImageInfo = ({ name, capital, img, info }) => {
  return (
    <ImageInfoDiv>
      <CustomH2>({name})</CustomH2>
      <CustomH3>({capital})</CustomH3>
      <CustomImg src={img} alt="123" />
      <CustomP>{info}</CustomP>
    </ImageInfoDiv>
  );
};

export default ImageInfo;
