import React, { Component } from "react";
import { notify } from "react-notify-toast";
import "./home.css";

import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

//Firebase
import "firebase/firestore";
import fire from "../../config/firebaseConfig.config";

var firestore = fire.firestore();