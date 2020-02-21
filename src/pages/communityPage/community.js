import React, { Component } from "react";
import "./community.css";
import Navbar from "../components/Navbar";
import { TwitterTimelineEmbed } from "react-twitter-embed";

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
<<<<<<< HEAD
                screenName="OwlHours"
=======
                screenName="Owl_Hours"
>>>>>>> a2f802e6084e770967e2ac412fa6d455ffac863d
                data-chrome="nofooter noheader"
                options={{ height: 600 }}
              />
            </div>
            <div className="maps">maps</div>

            <div className="incent">Hawk House has collected the most hours this semester and has won a free dress down!</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Community;
