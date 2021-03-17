import React, { useState, useEffect } from "react";
import Main from "./Components/Main/Main";
import lang from "./lang.json";
import "./Components/CustomScroll.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Country from "./Components/Country/Country";

const language = localStorage.getItem("language")
  ? localStorage.getItem("language")
  : "en";
localStorage.setItem("language", language);
function App() {
  const [pageLang, setPageLang] = useState(lang[language]);
  const handleLangChange = (e) => {
    localStorage.setItem("language", e.target.value);
    setPageLang(lang[e.target.value]);
  };

  return (
    <Switch>
      <Route
        path="/main"
        render={(props) => (
          <Main
            {...props}
            lang={pageLang}
            handleLangChange={handleLangChange}
          />
        )}
      />
      <Route
        path="/country"
        render={(props) => (
          <Country
            {...props}
            lang={pageLang}
            handleLangChange={handleLangChange}
          />
        )}
      />
      <Redirect to="/main" />
    </Switch>
  );
}

export default App;
