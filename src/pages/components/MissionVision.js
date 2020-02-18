import React, { Component } from "react";

class MissionVision extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mission: true
    };
  }
  render() {
    let missionStatement = "Mission Statement";
    let visionStatement = "Vision Statement";
    return (
      <div>
        <span>Mission</span>
        <span style={{ marginLeft: "5px", marginRight: "5px" }}>|</span>
        <span>Vision</span>
        <p>{this.state.mission ? missionStatement : visionStatement}</p>
      </div>
    );
  }
}

export default MissionVision;
