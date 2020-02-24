import React, { Component } from "react";
import Navbar from "../components/Navbar";
import LogHourForm from "./logHourForm";
import MissionVision from "../components/MissionVision";
import "./home.css";

//Firebase
import 'firebase/firestore';
import fire from '../../config/firebaseConfig.config';
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
      return new Promise((resolve,reject) =>  {
          const user = fire.auth().currentUser;
          if (user != null) {
            resolve(user);
          }
      }).then(function(variab) {
        console.log(variab);
        that.setState({user: variab})
      });
    }

    //Server Auth
    const ensureFireAuth = function() {
      return new Promise((resolve,reject) =>  {
          firestore.collection('users').doc(fire.auth().currentUser.uid).get() 
          .then(function(userRef) {
            if (userRef.exists) {
              resolve(userRef.data());
          }
        })
      }).then(function(variab) {
        that.setState({fireuser: variab})
      });
    }

    //Call Functions w/ TimeOut...
    setTimeout(ensureAuth, 500);
    setTimeout(ensureFireAuth, 500);

    //Debugging
    console.log(this.state.user, this.state.fireuser)
  }
  
  render() {
    if (!this.state.user || !this.state.fireuser) {
        return <div>Loading</div>
    }
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
                  <LogHourForm userName={this.state.user.displayName} currentLogAmmount={this.state.fireuser.hours.totalLogged} currentHourAmmount={this.state.fireuser.hours.totalHours}/>
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
                    // src={corwin} 
                    src={this.state.fireuser.info.userPicture}
                    alt="User Profile"
                    className="img-fluid img-profile"
                    style={{ marginBottom: "5px", height: "250px" }}
                  />
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={progressStyle}
                      aria-valuenow={Number(this.state.fireuser.hours.totalHours)}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {/* {this.state.fireuser.hours.totalHours}% */}
                    </div>
                  </div>
                  <p>
                    {this.state.fireuser.info.firstName} has{" "}
                    <span style={{ color: "#030D61", fontWeight: "bold" }}>
                      {this.state.fireuser.hours.totalHours}/100
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