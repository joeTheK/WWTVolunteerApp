import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./login.css";

class Login extends Component {
  render() {
    return (
      <div className="App">
        <h1>This Will be the login Page!</h1>
        <small>Login Page</small>
        <div>
          <Link to="/home">
            {<button className="btn btn-info"> Go On! </button>}
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
