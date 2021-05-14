'use strict'

const api = require('./api')
const ui = require('./ui')

const player1 = 'x'
const player2 = 'o'
let currentPlayer = player1
const gameIndex = ['', '', '', '', '', '', '', '', '']
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
    $('#' + indexSelection).text(currentPlayer)
    gameIndex[indexSelection] = currentPlayer
    checkResults()
    currentPlayer = currentPlayer === player1 ? player2 : player1
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

module.exports = {
  // onSignUp: onSignUp
  onUserSelection
}
