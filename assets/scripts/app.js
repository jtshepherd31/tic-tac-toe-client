'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

const authEvents = require('./authentication/events')
const gameEvents = require('./game-board/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Authentication eventauthE
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)
  // $('.modal').on('click', authEvents.onShowChangePassword)

  // Game board events
  $('.game-board').click(gameEvents.onUserSelection)
})
