import React, { useState } from "react";
import Main from "./Components/Main/Main";
import lang from "./lang.json";
import "./Components/CustomScroll.css";
import { Route, Redirect, Switch } from "react-router-dom";
import Country from "./Components/Country/Country";

window.lang = "en";

function App() {
  const [pageLang, setPageLang] = useState(lang[window.lang]);

  const handleLangChange = (e) => {
    window.lang = e.target.value;
    setPageLang(lang[window.lang]);
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
    </Switch>
  );
}

export default App;
