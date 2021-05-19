'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// function for signing up
const onSignUp = function (event) {
  // prevent that default
  event.preventDefault()

  // Pull user data from the form
  const data = getFormFields(event.target)

  // Make a request
  api.signUp(data)
  // .then is success
    .then(ui.signUpSuccess)
  // .catch is failed
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  // prevent that default
  event.preventDefault()

  // Pull user data from the form
  const data = getFormFields(event.target)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onShowChangePassword = function (event) {
  $('#myModal').modal('toggle')
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()

  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onShowChangePassword
}
