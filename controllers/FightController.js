const { Card, Fighter, Fight, Matchup } = require('../models')

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



const CreateFight = async (req, res) => {
  try {
    let newFight = { ...req.body }
    let fight = await Fight.create(newFight)
    res.send(fight)
  } catch (error) {

  }
}
const UpdateFight = async (req, res) => {
  try {
    let fightId = parseInt(req.params.fight_id)
    let updated_fight = await Fight.update(req.body, {
      where: { id: fightId },
      returning: true
    })
    res.send(updated_fight)
  } catch (error) {

  }
}

const DestroyFight = async (req, res) => {
  try {
    let fightId = parseInt(req.params.fight_id)
    await Fight.destroy({ where: { id: fightId } })
    res.send({ message: `Deleted Fight with an Id of ${fightId}` })
  } catch (error) {

  }
}

module.exports = {
  GetFights,
  GetFightById,
  CreateFight,
  UpdateFight,
  DestroyFight

}