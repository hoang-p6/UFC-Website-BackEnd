'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Fight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Fight.belongsTo(models.Card, { foreignKey: 'cardId' })
      Fight.hasMany(models.Review, { foreignKey: 'fightId' })
    }
  }
  Fight.init(
    {
      cardId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'cards',
          key: 'id'
        }
      },
      matchupId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'matchups',
          key: 'id'
        }
      },

      division: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Fight',
      tableName: 'fights'
    }
  )
  return Fight
}
