import React, { Component } from "react";
import "./login.css";
import 'font-awesome/css/font-awesome.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGoogle} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(faGoogle);


class Login extends Component {
  render() {
    return (
    <div className="App">
      <div id="box">
        <FontAwesomeIcon icon="Google"  />
        <button id="google" className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="Google"></i>Sign in with Google</button>
      </div>
    </div>
    );
  }
}

export default Login;
