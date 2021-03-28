import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "store";

import App from "./App";

import "./styles/index.scss";
import "./styles/_reset.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
