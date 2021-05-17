'use strict'

const player1 = 'X'
const player2 = 'O'
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

const onUserSelection = function (event) {
  const indexSelection = event.target.id
  if (gameIndex[indexSelection] === '' && !gameResult) {
    $('#' + indexSelection).html(`<p class='icons'>${currentPlayer}</p>`)
    gameIndex[indexSelection] = currentPlayer
    checkResults()

    currentPlayer = currentPlayer === player1 ? player2 : player1
    $('.player-indicators').toggleClass('current-player')
  }
  if (gameResult) {
    resetGame()
    resetPlayer()
    newGame()
  }
}

const checkResults = function () {
  winningConditions.forEach(condition => {
    const value1 = gameIndex[condition[0]]
    const value2 = gameIndex[condition[1]]
    const value3 = gameIndex[condition[2]]
    if (value1 === value2 && value2 === value3 && value1 !== '' && value2 !== '' && value3 !== '') {
      gameResult = currentPlayer + ' Won!'
    }
  })
  if (gameIndex.indexOf('') === -1 && !gameResult) {
    gameResult = 'Tie Game!'
  }
}

const newGame = function () {
  $('.new-game').toggleClass('inactive-screen')
  $('.game-parameter').toggleClass('inactive-screen')
}

const resetPlayer = function () {
  if (currentPlayer === player2) {
    $('.player-indicators').toggleClass('current-player')
    currentPlayer = player1
  }
}

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

module.exports = {
  onUserSelection,
  newGame,
  resetPlayer,
  resetGame
}
