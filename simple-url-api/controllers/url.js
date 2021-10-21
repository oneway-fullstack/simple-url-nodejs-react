'use strict'

const express = require('express')
const urlService = require('../services/url')

class ShortenUrlController {
  path = '/url'
  router = express.Router()
  urlService = urlService

  constructor() {
    this.initEndPoints()
  }

  initEndPoints = () => {
    this.router.get('/', this.getShortenUrls)
    this.router.get('/:urlCode', this.getShortenUrl)
    this.router.post('/', this.createShortenUrl)
    // this.router.put('/:url', this.updateShortenUrl)
    // this.router.delete('/:url', this.deleteShortenUrl)
  }

  getShortenUrls = async (req, res, next) => {
    try {
      const { limit, offset } = req.query
      const urls = await this.urlService.getAllUrls(parseInt(limit), parseInt(offset))
      res.status(200).send({
        code: 200,
        data: urls,
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

  getShortenUrl = async (req, res, next) => {
    const { urlCode } = req.params
    try {
      const url = await this.urlService.getUrlByCode(urlCode)

      if (url) {
        return res.redirect(url.originUrl);
      } else {
        res.status(400).send({
          code: 400,
          status: 'failed',
          message: 'This url is not registered.'
        })
      }
    } catch (error) {
      res.status(error.code).send({
        code: error.code,
        status: 'failed',
        message: error.message
      })
    }
  }

  createShortenUrl = async (req, res, next) => {
    const data = req.body
    try {
      const url = await this.urlService.createUrl(data)
      res.status(201).send({
        code: 201,
        url,
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
}

module.exports = new ShortenUrlController()