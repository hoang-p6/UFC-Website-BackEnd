const router = require('express').Router()
const controller = require('../controllers/CardController')
const middleware = require('../middleware')
const { route } = require('./AuthRouter')

router.get('/list', controller.GetCards)

module.exports = router