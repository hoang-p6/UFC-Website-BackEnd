const { Card, Fighter, Fight } = require('../models')

const GetFighters = async (req, res) => {
  try {
    const fighters = await Fighter.findAll()
    res.send(fighters)
  } catch (error) {
    throw error
  }
}

const GetFighterById = async (req, res) => {
  try {
    let fighterId = req.params.fighter_id
    const fighter = await Fighter.findAll({
      where: { id: fighterId }
    })
    res.send(fighter)

  } catch (error) {
    throw error
  }
}

const CreateFighter = async (req, res) => {
  try {
    let newFighter = { ...req.body }
    let fighter = await Fighter.create(newFighter)
    res.send(fighter)
  } catch (error) {

  }
}

const DestroyFighter = async (req, res) => {
  try {
    let fighterId = parseInt(req.params.fighter_id)
    await Fighter.destroy({ where: { id: fighterId } })
    res.send({ message: `Deleted Fighter with an Id of ${fighterId}` })
  } catch (error) {

  }
}

const UpdateFighter = async (req, res) => {
  try {
    let fighterId = parseInt(req.params.fighter_id)
    let updated_fighter = await Fighter.update(req.body, {
      where: { id: fighterId },
      returning: true
    })
    res.send(updated_fighter)
  } catch (error) {

  }
}

module.exports = {
  GetFighters,
  GetFighterById,
  CreateFighter,
  DestroyFighter,
  UpdateFighter

}