import React, { Component } from "react";
import Navbar from "../components/Navbar";
import "./ourStory.css";

class ourStory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="firstSec">
          <p className="firstSecA">At CSMB</p>
          <p className="firstSecB">We Value Service</p>
        </div>
      </div>
    );
  }
}

export default ourStory;
