import React, { Component } from "react";
import "./login.css";
import { GoogleLogin } from 'react-google-login';
import "typeface-quicksand";


class Login extends Component {

  render() {

    const responseGoogle = (response) => {
      document.location.href = '/home'; // This changes the URL when the popup goes away - Christopher
    }

    return (
      <div id="App">
        <div id="box">
        <h1 id="counter">1 0 0 0</h1>
        <h2 id="text">Hours Served </h2>
        <br></br>
        <div id="button">
          <GoogleLogin
          clientId="486383932824-76bvkkigh5vsmbkthvljcnae2t19u16j.apps.googleusercontent.com"
          buttonText="Login With Google"
          onSuccess={ responseGoogle }
          onFailure={console.log("bad")}
          cookiePolicy={'single_host_origin'}
          />
        </div>
        </div>
      </div>
    );
  }
}

export default Login;
