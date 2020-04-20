import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
// import "../public/css/App.scss";

import "../public/css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
