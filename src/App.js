import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

//Pages
import Login from "./pages/loginPage/login";
import NotFound from "./pages/404";
import Home from "./pages/homePage/home";
import Community from "./pages/communityPage/community";
import Opportunities from "./pages/opportunitiesPage/opportunities";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/community" component={Community} />
        <Route exact path="/opportunities" component={Opportunities} />
        <Route exact path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
