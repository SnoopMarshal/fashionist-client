import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./custom.css";
import App from "./components";

import { Provider } from "react-redux";
import store from "./app/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
