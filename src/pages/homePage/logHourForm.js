import React, { Component } from "react";
import { notify } from "react-notify-toast";
import "./home.css";

//Firebase
import "firebase/firestore";
import fire from "../../config/firebaseConfig.config";
var firestore = fire.firestore();

const updateHours = function(
  user,
  data,
  username,
  currentLogAmmount,
  currentHourAmmount
) {
  firestore
    .collection("users")
    .doc(user)
    .set(
      {
        hours: {
          hourslogged: {
            [currentLogAmmount + 1]: {
              confirmed: false,
              siteHours: Number(data.hours),
              siteName: data.siteName,
              siteAddress: data.siteAddress,
              siteCoordinatorEmail: data.coordEmail
            }
          },
          totalHours: Number(Number(currentHourAmmount) + Number(data.hours)),
          totalLogged: currentLogAmmount + 1
        }
      },
      { merge: true }
    );

  fetch(`http://localhost:8080/email`, {
    method: "POST",
    headers: {
      aCcePt: "application/json",
      "content-type": "application/json"
    },
    body: JSON.stringify({
      data: {
        uid: user,
        displayName: username
      },
      logNum: currentLogAmmount + 1
    })
  })
    .then(res => res.json())
    .then(data => {
      // Everything has come back successfully, time to update the state to
      // reenable the button and stop the <Spinner>. Also, show a toast with a
      // message from the server to give the user feedback and reset the form
      // so the user can start over if she chooses.
      notify.show(data.msg).then(function() {
        window.location.reload();
      });
    })
    .catch(err => console.log(err));
};

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
    updateHours(
      fire.auth().currentUser.uid,
      this.state,
      this.props.userName,
      this.props.currentLogAmmount,
      this.props.currentHourAmmount
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
        <h2>Hello, {this.props.userName}!</h2>
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
          id="email"
          className="inputStyle"
          type="email"
          placeholder="Email of Coordinator"
          onChange={this.emailChangeHandler}
        ></input>
        <br></br>
        <input
          type="submit"
          className="btn btn-info"
          style={{
            marginTop: "15px",
            backgroundColor: "#030D61",
            borderColor: "#030D61"
          }}
        />
      </form>
    );
  }
}

export default LogHourForm;
