import React from "react";
import ReactDOM from "react-dom";
import { BaseProvider, LightTheme } from "baseui";

import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assests/font-awesome/css/all.css";


ReactDOM.render(
    <BaseProvider theme={LightTheme}>
      <App />
    </BaseProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
