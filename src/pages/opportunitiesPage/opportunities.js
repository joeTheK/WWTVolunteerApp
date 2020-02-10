import React, { Component } from "react";
import "./opportunities.css";
import Navbar from "../components/Navbar";

class Opportunities extends Component {
  render() {
    return (
      <div className="OpportunitiesBody">
        <Navbar />
        <h1>This Will be the Opportunities Page!</h1>
        <small>Opportunities Page</small>
      </div>
    );
  }
}

export default Opportunities;
