import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./components.css";
// import { logDOM } from "@testing-library/react";
import logo from "./logo.jpg";
import firebase from "../../config/firebaseConfig.config";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  //Logout
  logout() {
    firebase.auth().signOut();
    document.location.href = "/";
  }

  //Using State for Nav Method https://www.bennettnotes.com/bootstrap-navbar-collapse-reactjs/
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/home">
          <img src={logo} alt="OwlHours" className="logo" />
        </a>
        <button
          onClick={this.toggleNavbar}
          className={`${classTwo}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`${classOne}`} id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/community">
                Community
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/opportunities">
                Opportunities
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ourstory">
                Story
              </Link>
            </li>

            <li className="nav-item">
              <button className="btn btn-outline-primary" onClick={this.logout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
