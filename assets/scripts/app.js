'use strict'

const authEvents = require('./authentication/events')
const gameEvents = require('./game-board/events')

$(() => {
  // Authentication events
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // Game board events
  $('.game-board').click(gameEvents.onUserSelection)
  $('.new-game-button').click(function () {
    gameEvents.newGame()
    gameEvents.onStartGame()
  })
  $('.menu-icon').click(gameEvents.openMenu)
  $('.close-button').click(gameEvents.openMenu)
})
