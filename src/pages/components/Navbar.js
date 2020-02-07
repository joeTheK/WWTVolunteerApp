import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./components.css";

class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <nav className="navbar fixed-top navbar-light bg-light">
          <Link to="/home">{<p className="navbar-brand">Yeet</p>}</Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;
