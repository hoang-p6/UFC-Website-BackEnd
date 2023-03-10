const { Card, Fighter, Fight, Matchup } = require('../models')
const { Op } = require('sequelize')

const GetCards = async (req, res) => {
  try {
    const cards = await Card.findAll({
      attributes: [
        'id',
        'title',
        'country',
        'date',
        'startTime',
        'city',
        'arena',
        'image'
      ],
      include: Fight
    })
    res.send(cards)
  } catch (error) { }
}

const GetCardById = async (req, res) => {
  try {
    let id = req.params.card_id
    const card = await Card.findAll({
      attributes: [
        'id',
        'title',
        'country',
        'date',
        'startTime',
        'city',
        'arena',
        'image'
      ],
      where: { id: id }
    })
    res.send(card)
  } catch (error) { }
}

const GetFightersByIdOfCard = async (req, res) => {
  try {
    const cardId = req.params.card_id
    let fightsArray = []
    let fightersOnCard = []
    const fights = await Fight.findAll({
      attributes: ['id', 'cardId', 'matchupId', 'division', 'winner'],
      where: { cardId: cardId }
    })
    console.log(fights)
    for (let i = 0; i < fights.length; i++) {

      fightsArray = [
        ...fightsArray,
        [
          fights[i].matchupId,
          fights[i].division,
          fights[i].dataValues.winner,
          fights[i].id,
          fights[i].cardId
        ]
      ]

    }

    for (let i = 0; i < fightsArray.length; i++) {
      let matchup = await Matchup.findAll({
        attributes: ['fighterOneId', 'fighterTwoId'],
        where: { id: fightsArray[i][0] }
      })
      let fighterOneId = [matchup[0].dataValues.fighterOneId][0]
      let fighterTwoId = [matchup[0].dataValues.fighterTwoId][0]
      let division = fightsArray[i][1]
      let winner = fightsArray[i][2]
      let fightId = fightsArray[i][3]
      let cardId = fightsArray[i][4]
      console.log(fightsArray)


      let fighters = await Fighter.findAll({
        attributes: [
          'firstName',
          'lastName',
          'wins',
          'losses',
          'draws',
          'birthDate',
          'country',
          'image'
        ],
        where: {
          id: {
            [Op.or]: [fighterOneId, fighterTwoId]
          }
        }
      })

      fightersOnCard = [
        ...fightersOnCard,
        [fighters, division, winner, fightId, cardId]
      ]
    }
    res.send({ fightersOnCard })
  } catch (error) { }
}
const CreateCard = async (req, res) => {
  try {
    let newCard = { ...req.body }
    const card = await Card.create(newCard)
    res.send(card)
  } catch (error) { }
}
const UpdateCard = async (req, res) => {
  try {
    let cardId = req.params.card_id
    let updatedCard = await Card.update(req.body, {
      where: { id: cardId },
      returning: true
    })
    res.send(updatedCard)
  } catch (error) { }
}
const DeleteCard = async (req, res) => {
  try {
    let cardId = req.params.card_id
    await Card.destroy({ where: { id: cardId } })
    res.send({ message: `Deleted Card with an Id of ${cardId}` })
  } catch (error) { }
}

module.exports = {
  GetCards,
  CreateCard,
  UpdateCard,
  DeleteCard,
  GetCardById,
  GetFightersByIdOfCard
}
