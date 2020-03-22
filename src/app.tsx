import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./pages/index";
import { CoronaTestContextProvider } from "./context";

export default function App() {
  return (
    <CoronaTestContextProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </CoronaTestContextProvider>
  );
}
