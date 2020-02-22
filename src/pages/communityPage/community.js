import React, { Component } from "react";
import "./community.css";
import Navbar from "../components/Navbar";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import schenk from "./schenk.png";

class Community extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="CommunityBody">
          <Navbar />
          <div className="mainContent">
            <div className="feed">
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="Owl_Hours"
                data-chrome="nofooter noheader"
                options={{ height: 600 }}
              />
            </div>
            <div className="maps">maps</div>

            <div className="incent">
              <img src={schenk} alt="Schenk:" className="schenk"/>
              <p>Hawk House has collected the most hours this semester and has won a free dress down!</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Community;
