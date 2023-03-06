const { Card, Fighter, Fight, Matchup } = require('../models')


const GetMatchups = async (req, res) => {
  try {
    const matchups = await Matchup.findAll({ attributes: ["fighterOneId", "fighterTwoId", 'fightId', "createdAt", "updatedAt"] })
    res.send(matchups)
  } catch (error) {

  }
}

const CreateMatchup = async (req, res) => {
  try {
    let newMatchup = { ...req.body }
  } catch (error) {

  }
}


module.exports = {
  GetMatchups
}