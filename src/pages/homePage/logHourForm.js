import React, { Component } from "react";
import "./home.css";

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
        <h1>Hello {this.props.userName}</h1>
        <input
          type="number"
          placeholder="Hours Served"
          onChange={this.hourChangeHandler}
        />
        <input
          type="text"
          placeholder="Site Name"
          onChange={this.nameChangeHandler}
        ></input>
        <input
          type="text"
          placeholder="Site Address"
          onChange={this.addressChangeHandler}
        ></input>
        <input
          type="email"
          placeholder="Email of Coordinator"
          onChange={this.emailChangeHandler}
        ></input>
        <input type="submit" />
      </form>
    );
  }
}

export default LogHourForm;
