const sendEmail = require('./email.send')
const msgs = require('./email.msgs')
const templates = require('./email.templates')

var admin = require('firebase-admin');
// import 'firebase/firestore';
// import fire from './config/firebaseConfig.config';
// var firestore = fire.firestore();
var credentials = require('../config/volunteer-hours.json')
admin.initializeApp({
  credential: admin.credential.cert(credentials),
  databaseURL: "https://volunteer-hours-aa32e.firebaseio.com"
});

var firestore = admin.firestore();

// The callback that is invoked when the user submits the form on the client.
exports.collectEmail = (req, res) => {
  const dataInfo = req.body;
  
  firestore.collection('users').doc(dataInfo["data"].uid).get()
    .then(function(dataRef) {
      const siteData = dataRef.data().hours.hourslogged[dataInfo.logNum];
      // Send verification if entry is made!
      if (siteData) {
          sendEmail(siteData.siteCoordinatorEmail, templates.confirm({
             to: siteData.siteCoordinatorEmail,
             userInfo: dataInfo["data"],
             hourNum: dataInfo.logNum
          })
        )
          .then(() => res.json({ msg: msgs.confirm }))
          .catch(err => console.log(err))
      }
    })
    .catch(err => console.log(err))
}

// The callback that is invoked when the user visits the confirmation
// url on the client and a fetch request is sent in componentDidMount.
exports.confirmEmail = (req, res) => {
  const confirmationToken = req.params.id

  const confirmationTokenSplit = confirmationToken.toString().split("_")
  const confirmationUID = confirmationTokenSplit[0];
  const confirmationNum = confirmationTokenSplit[1];

  // User.findById(id)
  //   .then(user => {
    //Checks to see if user is in DB.
    firestore.collection('users').doc(confirmationUID).get()
    .then(function(dataRef) {
      const siteData = dataRef.data().hours.hourslogged[confirmationNum];

      if (dataRef.exists) {

        if (siteData && !(siteData.confirmed)) { 
            firestore.collection('users').doc(confirmationUID).set({ 
              hours: {
                hourslogged: {
                  [confirmationNum]: {
                    'confirmed': true
                  } 
                }
              }
            }, { merge: true })
            .then(() => res.json({ msg: msgs.confirmed }))
            .catch(err => console.log(err))
        }

        else if (!siteData) {
          res.json({ msg: msgs.couldNotFindHours })
        }

        else {
          res.json({ msg: msgs.alreadyConfirmed })
        }
      }
      
      // Couldnt Find User..
      else if (!dataRef.exists) {
        res.json({ msg: msgs.couldNotFindUser })
      }
    })
    .catch(err => console.log(err))
}


// const sendEmail = require('./email.send')
// const msgs = require('./email.msgs')
// const templates = require('./email.templates')

// var admin = require('firebase-admin');
// // import 'firebase/firestore';
// // import fire from './config/firebaseConfig.config';
// // var firestore = fire.firestore();
// var credentials = require('../config/volunteer-hours.json')
// admin.initializeApp({
//   credential: admin.credential.cert(credentials),
//   databaseURL: "https://volunteer-hours-aa32e.firebaseio.com"
// });

// let firestore = admin.firestore();

// // The callback that is invoked when the user submits the form on the client.
// exports.collectEmail = (req, res) => {
//   const dataInfo = req.body;
//   var ref = firestore.ref('users/' + dataInfo["data"].uid + "/hours/hourslogged/" + dataInfo.logNum);
//   ref.on("value", function() {
//       // Send verification if entry is made!
//           console.log("Sending Email...")
//           sendEmail(dataInfo.siteCoordinatorEmail, templates.confirm({
//             to: dataInfo.siteCoordinatorEmail,
//             userInfo: dataInfo["data"],
//             hourNum: dataInfo.logNum
//           })
//         )
//           .then(() => res.json({ msg: msgs.confirm }))
//     })
// }

// // The callback that is invoked when the user visits the confirmation
// // url on the client and a fetch request is sent in componentDidMount.
// exports.confirmEmail = (req, res) => {
//   const confirmationToken = req.params.id

//   const confirmationTokenSplit = confirmationToken.toString().split("_")
//   const confirmationUID = confirmationTokenSplit[0];
//   const confirmationNum = confirmationTokenSplit[1];

//   var usersRef = firestore.ref("users/" + confirmationUID + "/hours/hoursLogged/");
//   var curreRef = usersRef.child(confirmationNum);

//     curreRef.update({
//       "confirmed": "true"
//     })
//     .then(() => res.json({ msg: msgs.confirmed }))
//     .catch(err => console.log(err))

//   // User.findById(id)
//   //   .then(user => {
//     //Checks to see if user is in DB.
//       // var ref = firestore.ref('users/' + confirmationUID + "/hours/hourslogged/" + confirmationNum);
//       // ref.on("value", function() {
//       //   // if (userRef) { 

//         // }

//         // else if (userRef && !userRef.hours.hoursLogged.confirmationNum) {
//         //   res.json({ msg: msgs.couldNotFindHours })
//         // }

//         // else {
//         //   res.json({ msg: msgs.alreadyConfirmed })
//         // }
      
//         // Couldnt Find User..
//         // else if (!userRef.exists) {
//         //   res.json({ msg: msgs.couldNotFindUser })
//         // }
//     // })
// }