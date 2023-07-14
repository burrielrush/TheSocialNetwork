const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

router.route('/').get(getAllThoughts);

router.route('/').post(createThought);

router
  .route('/')
  .get()
  .post();

router
  .route('/:thoughtId')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);


router
.route('/')
.get(getThoughtById)
.put(createThought);


router
.route('/:thoughtId')
.put(updateThought);


router
.route('/:thoughtId') 
.delete(getAllThoughts);


router
  .route('/:thoughtId/reactions')
  .get(getThoughtById)
  .post(addReaction);

// Route: DELETE /api/thoughts/:thoughtId/reactions/:reactionId
router
.route('/:thoughtId/reactions/:reactionId')
.delete(deleteReaction);

module.exports = router;
