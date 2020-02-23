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
    let missionStatement =
      "Our mission is to encourage students to find volunteering opportunities, track service hours, and reach school-wide and individual goals.";
    let visionStatement =
      "Our vision is to promote positive change in both our students and our community that we serve.";
    return (
      <div>
        <span
          onClick={this.handleClick}
          className="spanLink"
          style={{
            color: this.state.mission ? "#030D61" : "black",
            textDecoration: this.state.mission ? "underline" : "none",
            fontSize: "20px"
          }}
        >
          Mission
        </span>
        <span style={{ marginLeft: "5px", marginRight: "5px" }}>|</span>
        <span
          onClick={this.handleClick}
          className="spanLink"
          style={{
            color: this.state.mission ? "black" : "#030D61",
            textDecoration: this.state.mission ? "none" : "underline",
            fontSize: "20px"
          }}
        >
          Vision
        </span>
        <p style={{ marginTop: "3%", marginBottom: "3%", fontSize: "16px" }}>
          {this.state.mission ? missionStatement : visionStatement}
        </p>
      </div>
    );
  }
}

export default MissionVision;
