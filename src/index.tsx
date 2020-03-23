import * as React from "react";
import { render } from "react-dom";
import App from "./app";
import "./assets/scss/App.scss";

const rootEl = document.getElementById("root");

render(<App />, rootEl);
