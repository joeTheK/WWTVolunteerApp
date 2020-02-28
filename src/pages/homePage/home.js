import React, { Component } from "react";
import Navbar from "../components/Navbar";
import LogHourForm from "./logHourForm";
import MissionVision from "../components/MissionVision";
import "./home.css";

//Firebase
import "firebase/firestore";
import fire from "../../config/firebaseConfig.config";
var firestore = fire.firestore();

//email stuff the things aren't in the right place currently
// import 'express';
// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'wwtech2020@gmail.com',
//     pass: 'l0gmein2u'
//   }
// });

// var mailOptions = {
//   from: 'wwtech2020@gmail.com',
//   to: this.state.coordEmail,
//   subject: this.props.userName + ' would like to verify ' + this.state.hours + 'hours of community service at your facility. Respond "yes" to verify and "no" no nullify.',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      fireuser: null
    };
  }

  componentDidMount() {
    var that = this;

    //Local Auth
    const ensureAuth = function() {
      return new Promise((resolve, reject) => {
        const user = fire.auth().currentUser;
        if (user != null) {
          resolve(user);
        }
      }).then(function(variab) {
        console.log(variab);
        that.setState({ user: variab });
      });
    };

    //Server Auth
    const ensureFireAuth = function() {
      return new Promise((resolve, reject) => {
        firestore
          .collection("users")
          .doc(fire.auth().currentUser.uid)
          .get()
          .then(function(userRef) {
            if (userRef.exists) {
              resolve(userRef.data());
            }
          });
      }).then(function(variab) {
        that.setState({ fireuser: variab });
      });
    };

    //Call Functions w/ TimeOut...
    setTimeout(ensureAuth, 500);
    setTimeout(ensureFireAuth, 500);

    //Debugging
    console.log(this.state.user, this.state.fireuser);
  }

  render() {
    if (!this.state.user || !this.state.fireuser) {
      return <div>Loading...</div>;
    }
    const progressStyle = {
      width: this.state.fireuser.hours.totalHours + "%",
      color: "white",
      backgroundColor: "#030D61"
    };
    const untrackedProgressStyle = {
      width: 10 /* Add untracked hours here! */ + "%",
      color: "white",
      backgroundColor: "#9E9E9E"
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
                  <LogHourForm
                    userName={this.state.user.displayName}
                    currentLogAmmount={this.state.fireuser.hours.totalLogged}
                    currentHourAmmount={this.state.fireuser.hours.totalUnverifiedHours}
                  />
                </div>
              </div>
              <br></br>
              <div className="card" style={{ height: "300px" }}>
                <div
                  className="card-body"
                  style={{
                    paddingLeft: "25%",
                    paddingRight: "25%",
                    marginBottom: "5px"
                  }}
                ></div>
              </div>
            </div>
            <div className="col-sm-5">
              {/* Side Bar */}
              <div className="card" id="profile">
                <div className="card-body">
                  <img
                    src={this.state.fireuser.info.userPicture}
                    alt="User Profile"
                    className="img-fluid img-profile"
                    id="pimg"
                    style={{ marginBottom: "20px", height: "200px" }}
                  />
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={progressStyle}
                      aria-valuenow={parseInt(
                        this.state.fireuser.hours.totalHours
                      )}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <b>C</b>{/* {this.state.fireuser.hours.totalHours}% */}
                    </div>
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={untrackedProgressStyle}
                      aria-valuenow={parseInt(
                        this.state.fireuser.hours.totalUnverifiedHours
                      )}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <b>U</b>{/* {this.state.fireuser.hours.totalHours}% */}
                    </div>
                  </div>
                  <h4>
                    {this.state.fireuser.info.firstName} has{" "}
                    <span
                      style={{
                        marginTop: "20px",
                        color: "#030D61",
                        fontWeight: "bold",
                        fontSize: "larger"
                      }}
                    >
                      {this.state.fireuser.hours.totalHours + this.state.fireuser.hours.totalUnverifiedHours}/100
                    </span>{" "}
                    hours completed.
                  </h4>
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
