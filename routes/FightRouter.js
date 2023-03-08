const router = require('express').Router()
const controller = require('../controllers/FightController')
const middleware = require('../middleware')

router.get('/list', controller.GetFights)
router.get('/:fight_id/fighters', controller.GetFightersByIdOfFight)
router.post('/create', controller.CreateFight)
router.put('/update/:fight_id', controller.UpdateFight)
router.delete('/delete/:fight_id', controller.DestroyFight)
router.get('/:fight_id/reviews', controller.GetReviewsByFightId)
// router.post('/:fight_id/addreview', controller.AddReviewsByFightId)

module.exports = router
