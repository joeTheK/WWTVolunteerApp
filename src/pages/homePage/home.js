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
      userPic:
        "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
            <div className="col-sm-7">
              <div className="card">
                <div className="card-body" style={{ height: "245px" }}>
                  <LogHourForm userName={this.state.userName} />
                </div>
              </div>
              <br></br>
              <div className="card" style={{ height: "245px" }}>
                <div
                  className="card-body"
                  style={{
                    paddingLeft: "25%",
                    paddingRight: "25%",
                    marginBottom: "5px"
                  }}
                >
                  <MissionVision />
                </div>
              </div>
            </div>
            <div className="col-sm-5">
              {/* Side Bar */}
              <div className="card">
                <div className="card-body">
                  <img
                    src={this.state.userPic}
                    alt="User Profile"
                    className="img-fluid img-profile"
                    style={{ marginBottom: "5px" }}
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
