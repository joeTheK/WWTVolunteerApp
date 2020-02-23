import React, { Component } from "react";
import "./community.css";
import Navbar from "../components/Navbar";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import schenk from "./schenk.png";
import trophy from "./trophy.png"
import Tabletop from 'tabletop';


class Community extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    Tabletop.init({
      key: '14Ik5uHzguQFeYxEyFgcer6TQHsxLV7MiunLkhKplYRM',

      
      callback: googleData => {
        console.log('MAP DATA --->', googleData)
      },
      simpleSheet: true
    })
  }
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
                options={{ height: 640 }}
              />
            </div>
            <div className="maps">maps</div>

            <div className="incent">
              <p><img src={schenk} alt="Schenk:" className="schenk"/><img src={trophy} alt="" className="trophy"/> Hawk House has collected the most hours this semester and has won a free dress down!</p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Community;
