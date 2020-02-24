require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const emailController = require('./email/email.controller')
const { CLIENT_ORIGIN } = require('./config')

app.set('port', 8080);

// Only allow requests from our client
app.use(cors({
  origin: CLIENT_ORIGIN
}))

// Allow the app to accept JSON on req.body
app.use(express.json())

//Wake up..
app.get('/wake-up', (req, res) => res.json('👌'))

// This is the endpoint that is hit from the onSubmit handler in Landing.js
// The callback is shelled off to a controller file to keep this file light.
app.post('/email', emailController.collectEmail)

app.post("/someRoute", function(req, res) {
  console.log(req.body);
  res.send({ status: 'SUCCESS' });
});

// Same as above, but this is the endpoint pinged in the componentDidMount of 
// Confirm.js on the client.
app.get('/email/confirm/:id', emailController.confirmEmail)

// Catch all to handle all other requests that come into the app. 
app.use('*', (req, res) => {
  res.status(404).json({ msg: 'Not Found' })
})

app.listen(app.get('port'), function() { 
  console.log('we are listening on: ', 
  app.get('port'))
});

console.log('👍');