import React from "react";
import Search from "./Search";
import Countries from "./Countries";
import Footer from "./Footer";

const Content = ({ lang }) => {
  return (
    <>
      <Search lang={lang} />
      <Countries lang={lang} />
      <Footer lang={lang} />
    </>
  );
};

export default Content;
