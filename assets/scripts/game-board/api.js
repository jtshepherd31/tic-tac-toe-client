'use strict'

const config = require('./../config')
const store = require('./../store')

const startGame = function (data) {
  return $.ajax({
    method: 'POST',
    data,
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const updateGame = function (data, id) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + id,
    data,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const gameLog = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/id:',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

const getAllGamesLog = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

module.exports = {
  startGame,
  updateGame,
  getAllGamesLog,
  gameLog
}
