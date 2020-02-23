import React, { Component } from "react";
import "./home.css";
// import '../index.ts';
import updateHours from '../../index.ts'
import fire from "../../config/firebaseConfig.config";

class LogHourForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: 0,
      siteName: "",
      siteAddress: "",
      coordEmail: ""
    };
  }
  mySubmitHandler = event => {
    const user = fire.auth().currentUser();
    event.preventDefault();
    alert(
      "You are submitting with " +
        this.state.hours +
        " hours " +
        this.state.siteName +
        " siteName " +
        this.state.siteAddress +
        " siteAddress " +
        this.state.coordEmail +
        " coordEmail"
    );
    updateHours(user, this.state.hours);
    //export this.state.totalHours
  };
  hourChangeHandler = event => {
    this.setState({ hours: event.target.value });
  };
  nameChangeHandler = event => {
    this.setState({ siteName: event.target.value });
  };
  addressChangeHandler = event => {
    this.setState({ siteAddress: event.target.value });
  };
  emailChangeHandler = event => {
    this.setState({ coordEmail: event.target.value });
  };
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>Hello, {this.props.userName}!</h1>
        <input
          id="hours"
          className="inputStyle"
          type="number"
          placeholder="Hours Served"
          onChange={this.hourChangeHandler}
        />
        <br />
        <input
          id="site"
          className="inputStyle"
          type="text"
          placeholder="Site Name"
          onChange={this.nameChangeHandler}
        ></input>
        <br />
        <input
          id="address"
          className="inputStyle"
          type="text"
          placeholder="Site Address"
          onChange={this.addressChangeHandler}
        ></input>
        <br></br>
        <input
          style={{
            // float: "right",
            marginLeft: "68px"
          }}
          id="email"
          className="inputStyle"
          type="email"
          placeholder="Email of Coordinator"
          onChange={this.emailChangeHandler}
        ></input>

        <input
          type="submit"
          className="btn btn-info"
          style={{
            marginTop: "5px",
            backgroundColor: "#030D61",
            borderColor: "#030D61",
            float: "right",
            top: "20rem"
          }}
        />
      </form>
    );
  }
}

export default LogHourForm;