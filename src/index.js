import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("products"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
