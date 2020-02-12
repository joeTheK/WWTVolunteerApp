import React, { Component } from "react";
import "./home.css";

class LogHourForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalHours: 0
    };
  }
  mySubmitHandler = event => {
    event.preventDefault();
    alert("You are submitting");
    //export this.state.totalHours
  };
  myChangeHandler = event => {
    this.setState({ totalHours: event.target.value });
  };
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>Hello {this.props.userName}</h1>
        <input type="time" onChange={this.myChangeHandler} />
        <input type="submit" />
      </form>
    );
  }
}

export default LogHourForm;
