const { Card, Fighter, Fight, Matchup } = require('../models')


const GetCards = async (req, res) => {
  try {
    const cards = await Card.findAll({ attributes: ['title', 'country', 'date', 'startTime', 'city', 'arena', 'image'], include: Fight })
    res.send(cards)
  } catch (error) {

  }
}
const CreateCard = async (req, res) => {
  try {
    let newCard = { ...req.body }
    const card = await Card.create(newCard)
    res.send(card)
  } catch (error) {

  }
}
const UpdateCard = async (req, res) => {
  try {
    let cardId = req.params.card_id
    let updatedCard = await Card.update(req.body, {
      where: { id: cardId },
      returning: true
    }
    )
    res.send(updatedCard)
  } catch (error) {

  }
}
const DeleteCard = async (req, res) => {
  try {
    let cardId = req.params.card_id
    await Card.destroy({ where: { id: cardId } })
    res.send({ message: `Deleted Card with an Id of ${cardId}` })
  } catch (error) {

  }
}

module.exports = {
  GetCards,
  CreateCard,
  UpdateCard,
  DeleteCard
}