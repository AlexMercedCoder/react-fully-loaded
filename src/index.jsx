import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.scss";
import { App } from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

const root = createRoot(document.querySelector("#root"));
root.render(
  <Router>
    <App />
  </Router>
);
