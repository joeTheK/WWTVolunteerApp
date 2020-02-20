import React, { Component } from "react";

class MissionVision extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mission: true
    };
  }
  handleClick = () => {
    this.setState(state => ({
      mission: !state.mission
    }));
  };
  render() {
    let missionStatement = "Mission Statement";
    let visionStatement = "Vision Statement";
    return (
      <div>
        <span
          onClick={this.handleClick}
          style={{
            color: this.state.mission ? "#81c784" : "black",
            textDecoration: this.state.mission ? "underline" : "none"
          }}
        >
          Mission
        </span>
        <span style={{ marginLeft: "5px", marginRight: "5px" }}>|</span>
        <span
          onClick={this.handleClick}
          style={{
            color: this.state.mission ? "black" : "#81c784",
            textDecoration: this.state.mission ? "none" : "underline"
          }}
        >
          Vision
        </span>
        <p>{this.state.mission ? missionStatement : visionStatement}</p>
      </div>
    );
  }
}

export default MissionVision;
