const { Card, Fighter, Fight, Matchup } = require('../models')


const GetMatchups = async (req, res) => {
  try {
    const matchups = await Matchup.findAll({ attributes: ["fighterOneId", "fighterTwoId", "createdAt", "updatedAt"], include: [{ model: Fighter, attributes: ['firstName'] }] })
    res.send(matchups)
  } catch (error) {

  }
}


module.exports = {
  GetMatchups
}