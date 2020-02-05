import React, { Component } from "react";
import { Link } from "react-router-dom";
import './login.css';


class Login extends Component {
    
    render() {
        return (
            <div className="App">
                <h1>This Will be the login Page!</h1>
                <small>Login Page</small>
                <Link to="/home">{<button> Go On! </button>}</Link>
            </div>
        );
    }
}

export default Login;