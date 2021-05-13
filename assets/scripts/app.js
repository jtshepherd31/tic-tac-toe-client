'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const events = require('./authentication/events')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  // $('#change-password').on('submit', events.onChangePassword)
  // $('#sign-out').on('submit', events.onSignOut)
})
