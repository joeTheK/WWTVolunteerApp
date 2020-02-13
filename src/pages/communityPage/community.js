import React, { Component } from "react";
import "./community.css";
import Navbar from "../components/Navbar";

class Community extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="CommunityBody">
          <Navbar />
          <div className="mainContent">
            <div className="feed">feed</div>

            <div className="maps">maps</div>

            <div className="incent">incentives</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Community;
