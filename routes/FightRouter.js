const router = require('express').Router()
const controller = require('../controllers/FightController')
const middleware = require('../middleware')

router.get('/list', controller.GetFights)
router.get('/:fight_id', controller.GetFightById)


module.exports = router