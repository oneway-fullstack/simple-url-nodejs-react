'use strict'

class Exception extends Error {
  constructor(errorCode, message) {
    super(message);

    this.code = errorCode
    this.message = message
  }
}

class BadRequestException extends Exception {
  constructor(message) {
    super(400, message);

    this.code = 400
    this.message = message
  }
}

class NotFoundException extends Exception {
  constructor(message) {
    super(404, message);

    this.message = message
    this.code = 404
  }
}

module.exports = {
  Exception,
  BadRequestException,
  NotFoundException
}