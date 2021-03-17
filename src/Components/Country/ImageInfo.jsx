import React from "react";
import styled from "styled-components";

const ImageInfoDiv = styled.div`
  width: 90%;
  box-shadow: 0 0 8px;
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

const ImageInfo = ({ img, info }) => {
  return (
    <ImageInfoDiv>
      <CustomImg src={img} alt="123" />
      <CustomP>{info}</CustomP>
    </ImageInfoDiv>
  );
};

export default ImageInfo;
