import React from "react";
import { BrowserRouter } from 'react-router-dom';

import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <BrowserRouter>
      <>
        <GlobalStyles />
        <div>
          <Main theme={chosenTheme} />
        </div>
      </>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
