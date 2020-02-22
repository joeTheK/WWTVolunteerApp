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
import ourStory from "./pages/ourStoryPage/ourStoryPage";
// import Api from "./server/api/cities.js"

//FireBase
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/community" component={Community} />
        <Route exact path="/opportunities" component={Opportunities} />
        <Route exact path="/ourstory" component={ourStory} />
        <Route exact path="/opportunities/:op" component={Opportunities} />
        <Route exact path="/404" component={NotFound} />
        {/* <Route exact path="/api" component={Api} /> */}
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
