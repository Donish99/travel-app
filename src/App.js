import React, { useState } from "react";
import Main from "./Components/Main/Main";
import lang from "./lang.json";
import "./Components/CustomScroll.css";

window.lang = "en";

function App() {
  const [pageLang, setPageLang] = useState(lang[window.lang]);

  const handleLangChange = (e) => {
    window.lang = e.target.value;
    setPageLang(lang[window.lang]);
  };

  return <Main lang={pageLang} handleLangChange={handleLangChange} />;
}

export default App;
