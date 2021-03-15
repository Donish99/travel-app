import React from "react";
import Search from "./Search";
import Countries from "./Countries";

const Content = ({ lang }) => {
  return (
    <>
      <Search lang={lang} />
      <Countries />
    </>
  );
};

export default Content;
