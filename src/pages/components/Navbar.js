import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./components.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/home">{<button className="btn">Home</button>}</Link>
          <Link to="/community">
            {<button className="btn">Community</button>}
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
