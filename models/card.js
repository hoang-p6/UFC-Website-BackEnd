'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Card.hasMany(models.Fight, { foreignKey: 'cardId' })

    }
  }
  Card.init({
    title: DataTypes.STRING,
    date: DataTypes.DATE,
    startTime: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    arena: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Card',
    tableName: 'cards'
  });
  return Card;
};