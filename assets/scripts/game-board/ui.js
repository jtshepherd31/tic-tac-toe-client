const store = require('./../store')

const startGameSuccess = function (res) {
  store.game = res.game
}

const startGameFailure = function (err) {
  $('#messaging').text('An Error Occurred, could not start game. Error code: ' + err.status)
  $('#messaging').css('color', 'red')
}

const updateGameFailure = function (err) {
  $('#messaging').text('An Error Occurred, could not update game. Error code: ' + err.status)
  $('#messaging').css('color', 'red')
}

const showGameFailure = function (err) {
  $('#messaging').text('An Error Occurred, could not show game. Error code: ' + err.status)
  $('#messaging').css('color', 'red')
}

const showAllGamesFailure = function (err) {
  $('#messaging').text('An Error Occurred, could not show games. Error code: ' + err.status)
  $('#messaging').css('color', 'red')
}

const getLogSuccess = function (res) {
  res.games.forEach(game => {
    const date = new Date(game.createdAt)
    const isComplete = game.over ? 'Complete' : 'Incomplete'
    $('.game-log').append(`<li>${date.toDateString()} - <span class='${isComplete.toLowerCase()}'>${isComplete}</span></li>`)
  })
}

module.exports = {
  startGameSuccess,
  startGameFailure,
  updateGameFailure,
  showGameFailure,
  showAllGamesFailure,
  getLogSuccess
}
