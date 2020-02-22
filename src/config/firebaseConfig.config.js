import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBZF_uZ2qmZYGQioRhrClYjM-Us7Cyl-VY",
    authDomain: "volunteer-hours-aa32e.firebaseapp.com",
    databaseURL: "https://volunteer-hours-aa32e.firebaseio.com",
    projectId: "volunteer-hours-aa32e",
    storageBucket: "volunteer-hours-aa32e.appspot.com",
    messagingSenderId: "233602412691",
    appId: "1:233602412691:web:fc857a78cd522286339d66",
    measurementId: "G-07HFM5Y2G8"
  };

  const fire = firebase.initializeApp(config);
  export default fire;