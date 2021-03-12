import React from "react";
import ReactDOM from "react-dom";

import NewsState from "./context/news/NewsState";

import "./assets/global-styles/globals.style.scss";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <NewsState>
      <App />
    </NewsState>
  </React.StrictMode>,
  document.getElementById("root")
);
