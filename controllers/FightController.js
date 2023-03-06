const { Card, Fighter, Fight } = require('../models')

const GetFights = async (req, res) => {
  try {
    const fights = await Fight.findAll({
      attributes: ['id', 'cardId', 'matchupId', 'division', 'winner']
    })
    res.send(fights)
  } catch (error) {
    throw error
  }
}

const GetFightById = async (req, res) => {
  try {
    const fight = await Fight.findAll({ attributes: ['id', 'cardId', 'matchupId', 'division', 'winner'], where: { id: req.params.fight_id } })

    res.send(fight)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetFights,
  GetFightById
}