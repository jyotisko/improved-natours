const express = require('express');
const authController = require('./../controllers/authController');
const reviewController = require('./../controllers/reviewController');

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(reviewController.setTourAndUserIds, reviewController.checkDuplicateReview, reviewController.addAReview);

router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(authController.restrictTo('admin', 'user'), reviewController.updateReview)
  .delete(authController.restrictTo('admin', 'user'), reviewController.deleteReview);

module.exports = router;




