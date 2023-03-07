const { Card, Fighter, Fight, Matchup } = require('../models')


const GetMatchups = async (req, res) => {
  try {
    const matchups = await Matchup.findAll({ attributes: ["id", "fighterOneId", "fighterTwoId", "createdAt", "updatedAt"] })
    res.send(matchups)
  } catch (error) {

  }
}

const CreateMatchup = async (req, res) => {
  try {
    let newMatchup = { ...req.body }
    let matchup = Matchup.create(newMatchup)
    res.send(matchup)
  } catch (error) {

  }
}

const UpdateMatchup = async (req, res) => {
  try {
    let matchupId = parsInt(req.params.matchup_id)
    let updated_matchup = await Matchup.update(req.body, {
      where: { id: matchupId },
      returning: true
    })
    res.send(updated_matchup)

  } catch (error) {

  }
}

const DeleteMatchup = async (req, res) => {
  try {
    let matchupId = parsInt(req.params.matchup_id)
    await Matchup.destroy({ where: { id: matchupId } })
    res.send({ message: `Deleted Matchup with an Id of ${matchupId}` })
  } catch (error) {

  }
}


module.exports = {
  GetMatchups,
  CreateMatchup,
  UpdateMatchup,
  DeleteMatchup
}