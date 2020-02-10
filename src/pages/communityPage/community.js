import React, { Component } from "react";
import "./community.css";
import Navbar from "../components/Navbar";

class Community extends Component {
  render() {
    return (
      <div className="CommunityBody">
        <Navbar />
        <h1>This Will be the Community Page!</h1>
        <small>Community Page</small>
      </div>
    );
  }
}

export default Community;
