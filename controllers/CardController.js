const { Card, Fighter, Fight, Matchup } = require('../models')

const GetCards = async (req, res) => {
  try {
    const cards = await Card.findAll({
      attributes: ['title', 'country', 'date', 'startTime', 'city', 'arena'],
      include: Fight
    })
    res.send(cards)
  } catch (error) {}
}

module.exports = {
  GetCards
}
