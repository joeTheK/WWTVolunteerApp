import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div className="HomeBody">
        <Navbar />
        <h1>This Will be the Home Page!</h1>
        <small>Home Page</small>
      </div>
    );
  }
}

export default Home;
