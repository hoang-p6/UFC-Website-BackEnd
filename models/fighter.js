'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fighter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Fighter.belongsToMany(models.Card, { as: 'fighters', through: models.Fight, foreignKey: 'fighterId' })
    }
  }
  Fighter.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    wins: DataTypes.INTEGER,
    losses: DataTypes.INTEGER,
    draws: DataTypes.INTEGER,
    birthDate: DataTypes.DATE,
    country: DataTypes.STRING,
    division: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Fighter',
    tableName: 'fighters'
  });
  return Fighter;
};