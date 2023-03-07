const router = require('express').Router()
const controller = require('../controllers/CardController')
const middleware = require('../middleware')
const { route } = require('./AuthRouter')

router.get('/list', controller.GetCards)
router.get('/:card_id', controller.GetCardById)
router.get('/:card_id/fighters', controller.GetFightersByIdOfCard)
router.post('/create', controller.CreateCard)
router.put('/:card_id/update', controller.UpdateCard)
router.delete('/:card_id/delete', controller.DeleteCard)

module.exports = router