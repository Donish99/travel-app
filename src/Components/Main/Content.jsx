import React, { useState } from "react";
import Search from "./Search";
import Countries from "./Countries";
import Footer from "../Footer";
import countryData from "../../static/mainCountries";

const Content = ({ lang }) => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState(countryData);
  const language = localStorage.getItem("language");

  const handleSearchInput = (e) => {
    setQuery(e.target.value);
    filterData(e.target.value);
  };

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    filterData(query);
  };

  const clearQuery = () => {
    setQuery("");
    filterData("");
  };

  const filterData = (val) => {
    if (val === "") {
      setSearchResults(countryData);
      return;
    }
    let pattern = new RegExp(val, "i");
    let s = countryData.filter((c) => {
      if (c[language].name.match(pattern)) return c;
      else if (c[language].capital.match(pattern)) return c;
    });
    setSearchResults(s);
  };

  return (
    <>
      <Search
        lang={lang}
        query={query}
        handleSearchInput={handleSearchInput}
        handleQuerySubmit={handleQuerySubmit}
        clearQuery={clearQuery}
      />
      <Countries
        lang={lang}
        tileData={searchResults}
        searchResults={searchResults}
      />
      <Footer lang={lang} />
    </>
  );
};

export default Content;
