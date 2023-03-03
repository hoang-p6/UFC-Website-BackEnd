'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Fight.init({
    cardId: DataTypes.INTEGER,
    fighterOneId: DataTypes.INTEGER,
    fighterTwoId: DataTypes.INTEGER,
    division: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Fight',
    tableName: 'fights'
  });
  return Fight;
};