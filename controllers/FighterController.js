const { Card, Fighter, Fight } = require('../models')

const GetFighters = async (req, res) => {
  try {
    const fighters = await Fighter.findAll()
    res.send(fighters)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetFighters
}