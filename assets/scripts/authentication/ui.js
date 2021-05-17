'use strict'

const store = require('./../store')

// res = response
const signUpSuccess = function (res) {
  // reset the form an show result to user
  // $('#sign-up').reset()
  $('#sign-up').trigger('reset')

  // messaging
  $('#messaging').text('Welcome, ' + res.user.email + '. Please sign in using your new credentials.')
}

// err = error
const signUpFailure = function (err) {
  $('#messaging').text('Invalid username or password, please try again. Error code: ' + err.status)
  $('#messaging').css('color', 'red')
}

const signInSuccess = function (res) {
  // reset the form an show result to user
  // $('#sign-up').reset()
  $('#sign-in').trigger('reset')

  // create a key on an object
  // 1. access the key 2. set it equal to something
  // store['myKey'] = 'some value'
  // store.myKey = 'some value'
  store.user = res.user

  // messaging
  $('#messaging').text('Signed in! Welcome, ' + res.user.email)

  // Display the "after sign in" elements
  $('#after-sign-in').show()
  // Hide the "before sign in" elements
  $('#before-sign-in').hide()
}

const signInFailure = function (err) {
  $('#messaging').text('Invalid username or password, please try again. Error code: ' + err.status)
  $('#messaging').css('color', 'red')
}

const changePasswordSuccess = function () {
  $('#change-password').trigger('reset')
  $('#messaging').text('Change Password successfully')
}

const changePasswordFailure = function () {
  $('#messaging').text('Change Password Failed')
  $('#messaging').css('color', 'red')
}

// err = error

const signOutSuccess = function () {
  store.user = null
  $('#messaging').text('Signed Out Successfully!')

  // Display the "before sign in" elements
  $('#before-sign-in').show()
  // Hide the "after sign in" elements
  $('#after-sign-in').hide()
}

const signOutFailure = function (err) {
  $('#messaging').text('Failed with status: ' + err.status)
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
