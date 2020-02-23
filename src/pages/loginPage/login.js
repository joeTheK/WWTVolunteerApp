import React, { Component } from "react";
import "./login.css";
// import { GoogleLogin } from 'react-google-login';
import "typeface-quicksand";

//FireBase
import firebase from "firebase";
import fire from "../../config/firebaseConfig.config";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

class Login extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    fire.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      if(user) {
        document.location.href = '/home';
        console.log("user", user);
      }
    })
  }

  render() {
    return (
      <div id="App">
        <div id="box">
        <h1 id="counter">1 0 0 0</h1>
        <h2 id="text">Hours Served </h2>
        <br></br>
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={fire.auth()}
          />
          {/* <GoogleLogin
          clientId="486383932824-76bvkkigh5vsmbkthvljcnae2t19u16j.apps.googleusercontent.com"
          buttonText="Login With Google"
          onSuccess={ responseGoogle }
          onFailure={console.log("bad")}
          cookiePolicy={'single_host_origin'}
          /> */}
      </div>
    </div>
  )}
}

export default Login;