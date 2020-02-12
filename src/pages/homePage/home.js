import React, { Component } from "react";
import Navbar from "../components/Navbar";
import LogHourForm from "./logHourForm";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "John Doe",
      userPic:
        "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      progressComplete: 87
    };
  }
  render() {
    const progressStyle = {
      width: this.state.progressComplete + "%",
      color: "white",
      backgroundColor: "#81C784"
    };
    return (
      <div className="HomeBody">
        <Navbar />
        <div className="logHours">
          <LogHourForm userName={this.state.userName} />
        </div>
        {/* SideBar */}
        <div className="sideBar">
          <img
            src={this.state.userPic}
            alt="User Profile"
            className="img-fluid img-profile"
          />
          <div
            className="container"
            style={{ marginTop: "5%", textAlign: "center" }}
          >
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated"
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
              <span style={{ color: "#81c784" }}>
                {this.state.progressComplete}/100
              </span>{" "}
              hours completed
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
