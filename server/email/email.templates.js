const { CLIENT_ORIGIN } = require('../config')

module.exports = {
  confirm: info => ({
    subject: info.displayName + ' - OwlHours Confirmation Email',
    html: `
      <a href='${CLIENT_ORIGIN}/email/confirm/${info.userInfo.uid + "_" + info.hourNum}'>
        click to confirm email
      </a>
    `,      
    text: `Copy and paste this link: ${CLIENT_ORIGIN}/email/confirm/${info.userInfo.uid + "_" + info.hourNum}`
  })
  
}