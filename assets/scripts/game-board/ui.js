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

// when game is finished or log in occurs, if game log is a success, log that game
const getLogSuccess = function (res) {
  $('.total-games').text(res.games.length)
  res.games.forEach(game => {
    const date = new Date(game.createdAt)
    const isComplete = game.over ? 'Complete' : 'Incomplete'
    $('.game-log').prepend(`<li>${date.toDateString()} - <div class='${isComplete.toLowerCase()}'>${isComplete}</div></li>`)
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
