import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import NewsState from "./context/news/NewsState";

import "./assets/global-styles/globals.style.scss";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <NewsState>
      <App />
    </NewsState>
  </Provider>,
  document.getElementById("root")
);
