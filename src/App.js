import React, { Component } from 'react';
import "./App.css";
import fire from './config/firebaseConfig.config';

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

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }

  render() {
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
}

export default App;