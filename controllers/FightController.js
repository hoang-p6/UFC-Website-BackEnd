const { Card, Fighter, Fight } = require('../models')

const GetFights = async (req, res) => {
  try {
    const fights = await Fight.findAll({
      include: [
        { model: Card, as: 'cardId' }
      ]
    })
    res.send(fights)
  } catch (error) {
    throw error
  }
}

const GetFightById = async (req, res) => {
  try {
    const fight = await Fight.findAll({ where: { id: req.params.fight_id } })
    let hm = fight.division
    res.send(hm)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetFights,
  GetFightById
}