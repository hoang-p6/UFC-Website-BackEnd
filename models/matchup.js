'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matchup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {

    }
  }
  Matchup.init({
    fighterOneId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'fighters',
        key: 'id'
      }
    },
    fighterTwoId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'fighters',
        key: 'id'
      }
    },
    fightId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'fights',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Matchup',
    tableName: 'matchups'
  });
  return Matchup;
};