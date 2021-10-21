'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Urls extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Urls.init({
    urlCode: DataTypes.STRING,
    originUrl: DataTypes.STRING,
    shortenUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Urls',
  });
  return Urls;
};