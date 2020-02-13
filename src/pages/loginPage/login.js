import React, { Component } from "react";
import "./login.css";
import { GoogleLogin } from 'react-google-login';

class Login extends Component {

  render() {

    const responseGoogle = (response) => {
      document.location.href = '/community'; // This changes the URL when the popup goes away - Christopher
    }

    return (
      <div id="App">
        <div id="box">
          <GoogleLogin 
          clientId="486383932824-76bvkkigh5vsmbkthvljcnae2t19u16j.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={console.log("bad")}
          />
        </div>
      </div>
    );
  }
}

export default Login;
