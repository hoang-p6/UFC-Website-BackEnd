const router = require('express').Router()
const controller = require('../controllers/MatchupController')
const middleware = require('../middleware')


router.get('/list', controller.GetMatchups)

module.exports = router