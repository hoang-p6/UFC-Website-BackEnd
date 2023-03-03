const router = require('express').Router()
const controller = require('../controllers/FighterController')
const middleware = require('../middleware')

router.get('/list', controller.GetFighters)


module.exports = router