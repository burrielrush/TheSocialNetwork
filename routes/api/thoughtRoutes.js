const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addLike,
  removeLike,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts);
router.route('/:id').post(createThought);
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);
router.route('/:thoughtId/reactions').post(addLike);
router.route('/:thoughtId/reactions/:reactionId').delete(removeLike);

module.exports = router;
