exports.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV === 'production') {
  exports.CLIENT_ORIGIN = 'https://owlhours.us/api/'
}
else {
  exports.CLIENT_ORIGIN = 'http://localhost:3000'
}

