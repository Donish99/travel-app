import React from "react";
import styled from "styled-components";
import Navigation from "../Navigation";
import { IconButton } from "@material-ui/core";
import { HomeOutlined } from "@material-ui/icons";
import countryDetails from "../../static/countriesDetail";
import CountryContent from "./CountryContent";

const MainDiv = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const ContentDiv = styled.div`
  width: 100%;
  height: 95%;
`;

const Country = ({ lang, match, handleLangChange, history }) => {
  const Back = (
    <IconButton color="primary" onClick={() => history.push("/main")}>
      <HomeOutlined />
    </IconButton>
  );
  const countryId = match.params.id;
  const data = countryDetails.filter((d) => d.id === parseInt(countryId))[0];
  return (
    <MainDiv>
      <Navigation
        lang={lang}
        handleLangChange={handleLangChange}
        Back={Back}
        data={data}
      />
      <ContentDiv>
        <CountryContent data={data} />
      </ContentDiv>
    </MainDiv>
  );
};

export default Country;
