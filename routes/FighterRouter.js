const router = require('express').Router()
const controller = require('../controllers/FighterController')
const middleware = require('../middleware')

router.get('/list', controller.GetFighters)
router.get('/:fighter_id', controller.GetFighterById)
router.post('/create', controller.CreateFighter)
router.delete('/delete/:fighter_id', controller.DestroyFighter)
router.put('/:fighter_id/update', controller.UpdateFighter)


module.exports = router