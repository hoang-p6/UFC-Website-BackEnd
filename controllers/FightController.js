const { Card, Fighter, Fight, Matchup, Review } = require('../models')
const { Op } = require('sequelize')

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
const GetReviewsByFightId = async (req, res) => {
  const fightId = parseInt(req.params.fight_id)

  let reviews = await Review.findAll({
    attributes: ['review', 'rating', 'userName', 'id'],
    where: { fightId: fightId }
  })
  res.send(reviews)
}
// const AddReviewsByFightId = async (req, res) => {
//   const fightId = parseInt(req.params.fight_id)
//   console.log(fightId)
//   let reviews = await Review.create({ ...req.body })
//   res.send(reviews)
// }
const GetFightersByIdOfFight = async (req, res) => {
  try {
    const fight = await Fight.findAll({
      attributes: ['id', 'cardId', 'matchupId', 'division', 'winner'],
      where: { id: req.params.fight_id }
    })
    let matchId = fight[0].matchupId
    let findMatch = [matchId]
    const matchup = await Matchup.findAll({
      attributes: ['fighterOneId', 'fighterTwoId'],
      where: { id: findMatch }
    })
    let fighterOne = [matchup[0].fighterOneId]
    let fighterTwo = [matchup[0].fighterTwoId]
    const fighters = await Fighter.findAll({
      attributes: [
        'firstName',
        'lastName',
        'wins',
        'losses',
        'draws',
        'birthDate',
        'country'
      ],
      where: { id: { [Op.or]: [fighterOne, fighterTwo] } }
    })

    res.send(fighters)
  } catch (error) {
    throw error
  }
}

const CreateFight = async (req, res) => {
  try {
    let newFight = { ...req.body }
    let fight = await Fight.create(newFight)
    res.send(fight)
  } catch (error) { }
}
const UpdateFight = async (req, res) => {
  try {
    let fightId = parseInt(req.params.fight_id)
    let updated_fight = await Fight.update(req.body, {
      where: { id: fightId },
      returning: true
    })
    res.send(updated_fight)
  } catch (error) { }
}

const DestroyFight = async (req, res) => {
  try {
    let fightId = parseInt(req.params.fight_id)
    await Fight.destroy({ where: { id: fightId } })
    res.send({ message: `Deleted Fight with an Id of ${fightId}` })
  } catch (error) { }
}

module.exports = {
  GetFights,
  GetFightersByIdOfFight,
  CreateFight,
  UpdateFight,
  DestroyFight,
  GetReviewsByFightId
}
