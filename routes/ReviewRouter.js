const router = require('express').Router()
const controller = require('../controllers/ReviewController')
const middleware = require('../middleware')

router.get('/', controller.GetReviews)
router.post(
  '/:fight_id/addreview',

  controller.CreateReview
)
router.put(
  '/:review_id/update',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateReview
)
router.delete(
  '/:review_id/delete',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.DeleteReview
)

module.exports = router
