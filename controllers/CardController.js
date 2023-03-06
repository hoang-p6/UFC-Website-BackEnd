const { Card, Fighter, Fight } = require('../models')

const GetCards = async (req, res) => {
  try {
    const card = await Card.findAll()
    res.send(card)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetCards
}
