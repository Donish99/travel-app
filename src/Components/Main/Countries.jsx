import React from "react";
import styled from "styled-components";
import CountryCard from "./CountryCard";

const CountriesDiv = styled.div`
  height: 55%;
  width: 100%;
  background-color: #b6c0a1;
  display: flex;
`;

const Countries = () => {
  return (
    <CountriesDiv>
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </CountriesDiv>
  );
};

export default Countries;
