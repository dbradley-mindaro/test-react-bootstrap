import React from "react";
import ReactDOM from "react-dom";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import Landing from "./layouts/landing";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider breakpoints={["lg", "md", "sm", "xs"]}>
        <Landing />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
