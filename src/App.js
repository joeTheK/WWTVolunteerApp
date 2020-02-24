import React, { Component } from "react";
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

//FireBase
import 'firebase/firestore';
import fire from './config/firebaseConfig.config';
var firestore = fire.firestore();

import Maps from "./pages/testMap/map";
// import Api from "./server/api/cities.js"

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });

        localStorage.setItem('user', user.uid);

        //Checks to see if user is in DB.
        firestore.collection('users').doc(user.uid).get()
        .then(function(userRef) {
          if (userRef.exists) {
              console.log(userRef.data().info.firstName)
          } else {
            var name = user.displayName;
            var namesplit = name.split(" ")
            firestore.collection('users').doc(user.uid).set({
              //Sets User Profile Info
              info: {
                firstName: namesplit[0],
                lastName: namesplit[1],
                userPicture: user.photoURL
              },
              
              //Sets User Data Info
              hours: {
                totalHours: 20,
                totalLogged: 2,
                hourslogged: {
                  "1" : {
                    confirmed: true,
                    siteHours: 20,
                    siteName: "CSMB Student Council",
                    siteAddress: "1547 S Theresa Ave, St. Louis, MO 63104",
                    siteCoordinatorEmail: "stuco@csmb-stl.org"
                  },
                }
              }
            });
          }
        });

      } else {
        this.setState({ user: null });
        localStorage.removeItem("user");
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
          <Route exact path="/Map" component={Maps} />
          <Route exact path="/404" component={NotFound} />
          {/* <Route exact path="/api" component={Api} /> */}
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}

export default App;
