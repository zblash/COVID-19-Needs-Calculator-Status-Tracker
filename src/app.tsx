import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./pages/index";

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
