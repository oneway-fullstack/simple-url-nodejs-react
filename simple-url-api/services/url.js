'use strict'

const shortid = require("shortid");
const validUrl = require("valid-url");
const db = require('../models')
const { BadRequestException, NotFoundException, Exception } = require('../helpers/exceptions')
const { isNumber } = require('../helpers/number')
const { isUndefined, isEmail } = require('../helpers/string')
const { LIMIT } = require('../helpers/constants')
const { normalizeDTO } = require("../helpers/object")

class UrlService {
  Urls = db.Urls

  getAllUrls = async (limitCount = 10, offsetCount = 0) => {
    isUndefined(limitCount) && (limitCount = LIMIT)
    isUndefined(offsetCount) && (offsetCount = 0)

    if (!isNumber(limitCount) || !isNumber(offsetCount)) {
      throw new BadRequestException(`Limit and offset should be a numbers, but got limit=${limitCount}, offset=${offsetCount}`)
    }

    limitCount = parseInt(limitCount) < 10 ? limitCount : LIMIT

    const result = await this.Urls.findAll({
      offset: parseInt(offsetCount),
      limit: limitCount,
      order: [
        ['id', 'DESC']
      ]
    })
    return result
  }

  getUrlByCode = async (urlCode) => {
    const result = await this.Urls.findOne({
      where: {
        urlCode
      }
    })

    return result
  }

  createUrl = async (data) => {
    data = normalizeDTO(data)
    // Data field check
    const urlCode = shortid.generate()
    const { originUrl } = data

    if (validUrl.isUri(originUrl)) {
      const url = await this.Urls.findOne({
        where: { originUrl }
      })

      if (url) {
        throw new NotFoundException(`This url - ${originUrl} already exists.`)
      }

      const shortenUrl = `${process.env.BASE_URL}${urlCode}`
      const newUrl = {
        urlCode, originUrl, shortenUrl
      }
      const result = await this.Urls.create(newUrl)
      return result
    } else {
      throw new BadRequestException(`Please use the valid url.`)
    }
  }

  updatePlayer = async (id, data) => {
    if (!isNumber(id) || !isNumber(id)) {
      throw new BadRequestException(`${id} should be the number`)
    }
    let currentPlayer = await this.Player.findByPk(id)

    data = normalizeDTO(data)
    // Data field check
    this.checkDataComplete(data)

    if (!currentPlayer) {
      throw new NotFoundException(`Player with id ${id} not found`)
    }

    // Mail Format Check
    if (!isEmail(data.email)) {
      throw new NotFoundException('Email format is invalid!')
    }

    // Phone & Mail Check
    if (!this.isUnique('phone', data.phone) || !this.isUnique('email', data.email)) {
      throw new BadRequestException('Phone or Email already exists!')
    }

    await this.Player.update(data, {
      where: {
        id: id
      }
    })

    return data
  }

  deletePlayer = async (id) => {
    if (!isNumber(id) || !isNumber(id)) {
      throw new BadRequestException(`${id} should be the number`)
    }

    let currentPlayer = await this.Player.findByPk(id)

    if (!currentPlayer) {
      throw new NotFoundException(`Player with id ${id} not found`)
    }

    const result = await this.Player.destroy({
      where: {
        id: id
      }
    })

    return result
  }

  isUnique = async (key, value) => {
    const count = await this.Player.count({
      where: {
        [key]: value
      }
    })

    if (count !== 0)
      return false
    else
      return true
  }

  checkDataComplete = (data) => {
    if (data.firstName === undefined || data.lastName === undefined || data.phone === undefined || data.email === undefined)
      throw new BadRequestException('The request datais incomplete, it must have firstName, lastName, phone, email')
  }
}

module.exports = new UrlService()