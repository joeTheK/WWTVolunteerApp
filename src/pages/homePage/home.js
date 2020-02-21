import React, { Component } from "react";
import Navbar from "../components/Navbar";
import LogHourForm from "./logHourForm";
import MissionVision from "../components/MissionVision";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "User",
      userPic: "https://unsplash.com/photos/BlGmdY18CFQ",
      progressComplete: 87
    };
  }
  render() {
    const progressStyle = {
      width: this.state.progressComplete + "%",
      color: "white",
      backgroundColor: "#030D61"
    };
    return (
      <div className="HomeBody">
        <Navbar />
        <br></br>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <div className="card">
                <div className="card-body">
                  <LogHourForm userName={this.state.userName} />
                </div>
              </div>
              <br></br>
              <div className="card">
                <div className="card-body">
                  <MissionVision />
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              {/* Side Bar */}
              <div className="card">
                <div className="card-body">
                  <img
                    src={this.state.userPic}
                    alt="User Profile"
                    className="img-fluid img-profile"
                  />
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={progressStyle}
                      aria-valuenow={this.state.progressComplete}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {this.state.progressComplete}%
                    </div>
                  </div>
                  <p>
                    {this.state.userName} has{" "}
                    <span style={{ color: "#030D61" }}>
                      {this.state.progressComplete}/100
                    </span>{" "}
                    hours completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
