const express = require('express')
const cors = require('cors')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const docOption = require('./docs/options')
const specs = swaggerJsDoc(docOption);

const logger = require('morgan');
const { NotFoundException, BadRequestException } = require('./helpers/exceptions')
const db = require("./models")
const controllers = require('./routes')

const app = express();

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
})
app.use(cors('*'))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Databse Sync
db.sequelize.sync();

// Register Routes
controllers.forEach(controller => {
  app.use(controller.path, controller.router)
})

// Swagger DOC
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

// Custom Exception
app.use((err, req, res, next) => {
  const customExceptions = [NotFoundException, BadRequestException]

  if (isCustomException(err, customExceptions)) {
    return res.status(err.code).json({ code: err.code, message: err.message })
  }

  next(err)
})

const isCustomException = (exception, customExceptions) => {
  return customExceptions.reduce((result, customException) => {
    exception instanceof customException && (result = true)
    return result
  }, false)
}

module.exports = app;