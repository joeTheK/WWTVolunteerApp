import React, { Component } from "react";
import "./community.css";
import Navbar from "../components/Navbar";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

class Community extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="CommunityBody">
          <Navbar />
          <div className="mainContent">
            <div className="feed">
              <h1>Feed</h1>
              <TwitterTimelineEmbed
              sourceType="profile"
              screenName="VolunP"
              options={{height: 1000}}
              />
            </div>
            <div className="maps">maps</div>

            <div className="incent">incentives</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Community;
