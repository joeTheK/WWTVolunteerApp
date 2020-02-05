import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
            <h1>This Will be the login Page!</h1>
            <small>Login Page</small>
            <Link to="/home">{<button> Go On! </button>}</Link>
        </div>
    );
}

export default Login;