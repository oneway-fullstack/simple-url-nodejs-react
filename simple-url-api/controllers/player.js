'use strict'

const express = require('express')
const playerService = require('../services/player')

class PlayerController {
  path = '/player'
  router = express.Router()
  playerService = playerService

  constructor() {
    this.initEndPoints()
  }

  initEndPoints = () => {
    /**
     * @swagger
     * /player:
     *   get:
     *     summary: Retrieve a list of players
     *     description: Retrieve a list of players.
    */
    this.router.get('/', this.getPlayersList)
    this.router.get('/:id', this.getPlayerById)
    this.router.post('/', this.createPlayer)
    this.router.put('/:id', this.updatePlayer)
    this.router.delete('/:id', this.deletePlayer)
  }

  getPlayersList = async (req, res, next) => {
    const { limit, offset } = req.query

    try {
      const players = await this.playerService.getAllPlayers(limit, offset)
      res.status(200).send({
        code: 200,
        data: players,
        status: 'success',
        offset: parseInt(offset) + parseInt(limit),
        limit: limit
      })

    } catch (error) {
      res.status(error.code).send({
        code: error.code,
        status: 'failed',
        message: error.message
      })
    }
  }

  getPlayerById = async (req, res, next) => {
    const { id } = req.params
    try {
      const player = await this.playerService.getPlayerById(id)
      res.status(200).send({
        code: 200,
        data: player,
        status: 'success'
      })
    } catch (error) {
      res.status(error.code).send({
        code: error.code,
        status: 'failed',
        message: error.message
      })
    }
  }

  createPlayer = async (req, res, next) => {
    const data = req.body
    try {
      const player = await this.playerService.createPlayer(data)
      res.status(201).send({
        code: 201,
        data: player,
        status: 'success'
      })
    } catch (error) {
      res.status(error.code).send({
        code: error.code,
        status: 'failed',
        message: error.message
      })
    }
  }

  updatePlayer = async (req, res, next) => {
    const { id } = req.params
    const data = req.body
    try {
      const player = await this.playerService.updatePlayer(id, data)
      res.status(200).send({
        code: 200,
        data: player,
        status: 'success',
        message: "Player is updated successfully."
      })
    } catch (error) {
      res.status(error.code).send({
        code: error.code,
        status: 'failed',
        message: error.message
      })
    }
  }

  deletePlayer = async (req, res, next) => {
    const { id } = req.params
    try {
      const player = await this.playerService.deletePlayer(id)
      res.status(200).send({
        code: 200,
        data: player,
        status: 'success',
        message: "Player is deleted successfully."
      })
    } catch (error) {
      res.status(error.code).send({
        code: error.code,
        status: 'failed',
        message: error.message
      })
    }
  }
}

module.exports = new PlayerController()