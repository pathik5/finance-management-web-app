import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css"; // Custom styles
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Matches the div in index.html
);