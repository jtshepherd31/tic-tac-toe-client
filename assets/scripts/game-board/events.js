'use strict'
const store = require('./../store')
const api = require('./api')
const ui = require('./ui')

// set values for players, winning formations and set array for game
const player1 = { value: 'X', color: '#ff383f', name: 'Player 1' }
const player2 = { value: 'O', color: '#2eb2ff', name: 'Player 2' }
let currentPlayer = player1
let gameIndex = ['', '', '', '', '', '', '', '', '']
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2]
]
let gameResult

// add the x or o based on which player had clicked and what box
const onUserSelection = function (event) {
  const indexSelection = event.target.id
  if (gameIndex[indexSelection] === '' && !gameResult) {
    $('#' + indexSelection).html(`<p style='color: ${currentPlayer.color}' class='icons'>${currentPlayer.value}</p>`)
    gameIndex[indexSelection] = currentPlayer
    checkResults()
    onUpdateGame(indexSelection)

    currentPlayer = currentPlayer === player1 ? player2 : player1
    $('.player-indicators').toggleClass('current-player')
  }
  // reset functions if game results happens
  if (gameResult) {
    resetGame()
    resetPlayer()
    newGame()
    getGameLog()
  }
}

// check for three matching values = win, otherwise, tie
const checkResults = function () {
  winningConditions.forEach(condition => {
    const value1 = gameIndex[condition[0]]
    const value2 = gameIndex[condition[1]]
    const value3 = gameIndex[condition[2]]
    if (value1 === value2 && value2 === value3 && value1 !== '' && value2 !== '' && value3 !== '') {
      gameResult = currentPlayer.name + ' Wins!'
    }
  })
  // if there is no empty box left, use default -1 to show no empty strings left
  if (gameIndex.indexOf('') === -1 && !gameResult) {
    gameResult = 'Tie Game!'
  }
}

// after clicking start game, show game board
const newGame = function () {
  $('.new-game').toggleClass('inactive-screen')
  $('.game-parameter').toggleClass('inactive-screen')
}

// reset player indicators so it doesnt start with player 2
const resetPlayer = function () {
  if (currentPlayer === player2) {
    $('.player-indicators').toggleClass('current-player')
    currentPlayer = player1
  }
}

// function for reset after result
const resetGame = function () {
  if (gameResult) {
    $('.game-message').text(gameResult + ' Start New Game!')
  } else {
    $('.game-message').text('Start New Game!')
  }
  $('.game-board').empty()
  gameResult = null
  gameIndex = ['', '', '', '', '', '', '', '', '']
}

// function based on start game to log start of game and what time
const onStartGame = function (event) {
  const data = {
    game: {
      cells: gameIndex,
      over: false,
      owner: store.user._id,
      createdAt: Date.now(),
      updatedAt: null
    }
  }
  api.startGame(data)
    .then(ui.startGameSuccess)
    .catch(ui.startGameFailure)
}

// get logs for the right side panel based on user
const getGameLog = function () {
  $('li').remove()
  api.getAllGamesLog()
    .then(ui.getLogSuccess)
}

// update game with new piece
const onUpdateGame = function (indexSelection) {
  const data = {
    game: {
      cell: {
        index: indexSelection,
        value: currentPlayer.value
      },
      over: !!gameResult
    }
  }
  api.updateGame(data, store.game._id)
}

// add function to open menu for mobile
const openMenu = function () {
  if ($('.left-panel').css('visibility') === 'collapse') {
    $('.left-panel').css('visibility', 'visible')
  } else {
    $('.left-panel').css('visibility', 'collapse')
  }
}

module.exports = {
  onUserSelection,
  newGame,
  resetPlayer,
  resetGame,
  onStartGame,
  onUpdateGame,
  getGameLog,
  openMenu
}
