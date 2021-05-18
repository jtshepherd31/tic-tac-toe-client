'use strict'

const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')

const ui = require('./ui')

// Sign Up Form Submit Handler
const onSignUp = function (event) {
  // prevent that default
  event.preventDefault()

  // This is a submit event! So the form that was
  // submitted is the target of the event

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

  // This is a submit event! So the form that was
  // submitted is the target of the event

  // Pull user data from the form
  const data = getFormFields(event.target)

  // Make a request
  api.signIn(data)
  // .then is successful api response
    .then(ui.signInSuccess)
  // .catch is failed api response or any error within signInSuccess
    .catch(ui.signInFailure)
}

const onShowChangePassword = function (event) {
  $('#myModal').modal('toggle')
}

const onChangePassword = function (event) {
  // prevent the preventDefault
  event.preventDefault()
  // get data
  const data = getFormFields(event.target)

  // api request
  api.changePassword(data)
  // hande res/error
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
  // onSignUp: onSignUp
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onShowChangePassword
}
