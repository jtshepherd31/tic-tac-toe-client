'use strict'

const store = require('./../store')
const gameEvents = require('./../game-board/events')

const signUpSuccess = function (res) {
  $('#sign-up').trigger('reset')

  $('#messaging').text('Welcome New User! Please sign in using your new credentials.')
  $('#messaging').css('color', '#656565')
  setTimeout(function () {
    $('#messaging').text('')
  }, 3000)
}

const signUpFailure = function (err) {
  $('#messaging').text('Invalid username or password, please try again. Error code: ' + err.status)
  $('#messaging').css('color', 'red')
  setTimeout(function () {
    $('#messaging').text('')
  }, 3000)
}

// hide all pre sign in screens and show after sign in, remove disable for start button
const signInSuccess = function (res) {
  $('#sign-in').trigger('reset')
  store.user = res.user
  $('#messaging').text('Signed in! Welcome!')
  $('#messaging').css('color', '#656565')

  $('.game-message').text('Start a Game!')
  // Display the "after sign in" elements
  $('#after-sign-in').show()
  // Hide the "before sign in" elements
  $('#before-sign-in').hide()

  $('.new-game-button').removeAttr('disabled')

  gameEvents.getGameLog()
  setTimeout(function () {
    $('#messaging').text('')
  }, 3000)
}

const signInFailure = function (err) {
  $('#messaging').text('Invalid username or password, please try again. Error code: ' + err.status)
  $('#messaging').css('color', 'red')
  setTimeout(function () {
    $('#messaging').text('')
  }, 3000)
}

const changePasswordSuccess = function () {
  $('#change-password').trigger('reset')
  $('#change-password-messaging').text('Change Password successfully')
  $('#change-password-messaging').css('color', '#656565')
  setTimeout(function () {
    $('#change-password-messaging').text('')
  }, 3000)
}

const changePasswordFailure = function () {
  $('#change-password-messaging').text('Change Password Failed')
  $('#change-password-messaging').css('color', 'red')
  setTimeout(function () {
    $('#change-password-messaging').text('')
  }, 3000)
}
// switch back to pre - sign in screens
const signOutSuccess = function () {
  store.user = null
  $('#messaging').text('Signed Out Successfully!')
  $('#messaging').css('color', '#656565')
  $('#before-sign-in').show()
  $('#after-sign-in').hide()
  if ($('.new-game').hasClass('inactive-screen')) {
    $('.new-game').toggleClass('inactive-screen')
    $('.game-parameter').toggleClass('inactive-screen')
  }
  // remove lists , reset player indicator, remove current moves
  $('li').remove()
  gameEvents.resetGame()
  gameEvents.resetPlayer()
  $('.new-game-button').attr('disabled', 'true')
  $('.game-message').text('Please Sign In To Start A Game!')
  setTimeout(function () {
    $('#messaging').text('')
  }, 3000)
}

const signOutFailure = function (err) {
  $('#messaging').text('Failed with status: ' + err.status)
  $('#messaging').css('color', 'red')
  setTimeout(function () {
    $('#messaging').text('')
  }, 3000)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
