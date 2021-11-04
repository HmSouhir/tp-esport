import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import screens from "./screens";

const App = () => (
  <BrowserRouter>
    <Switch>{renderRoutes(screens)}</Switch>
  </BrowserRouter>
);

export default App;
