const router = require('express').Router()
const controller = require('../controllers/MatchupController')
const middleware = require('../middleware')


router.get('/list', controller.GetMatchups)
router.post('/create', controller.CreateMatchup)
router.delete('/:matchup_id/delete', controller.DeleteMatchup)
router.put('/:matchup_id/update', controller.UpdateMatchup)

module.exports = router