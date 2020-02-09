import React, { Component } from "react";
import "./login.css";
import { GoogleLogin } from 'react-google-login';

class Login extends Component {

  render() {

    const responseGoogle = (response) => {
      console.log(response);
    }

    return (
      <div className="App">
        <div className="box">
          <GoogleLogin 
          clientId="486383932824-76bvkkigh5vsmbkthvljcnae2t19u16j.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          />
        </div>
      </div>
    );
  }
}

export default Login;
