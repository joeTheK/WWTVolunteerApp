import React from 'react';
import logo from './logo.svg';
import './App.css';

import { 
  BrowserRouter as Router, 
  Route, 
  Switch, 
  Link, 
  Redirect 
} from "react-router-dom";

//Pages
import Login from "./pages/login";
import NotFound from "./pages/404";
import Home from "./pages/home";
import Community from "./pages/community";

function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/community" component={Community}/>
      <Route exact path="/404"component={NotFound}/>
      <Redirect to="/404"/>
    </Switch>
  </Router>
  );
}

export default App;
