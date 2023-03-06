const router = require('express').Router()
const controller = require('../controllers/cardController')
const middleware = require('../middleware')

router.get('/cards', controller.GetCards)

module.exports = router
