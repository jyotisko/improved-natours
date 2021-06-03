const Review = require('./../models/reviewsModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./handlerFactory');
const AppError = require('./../utils/apiErrors');


exports.setTourAndUserIds = (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user._id;
  next();
};

exports.checkDuplicateReview = catchAsync(async (req, res, next) => {
  const { tour, user } = req.body;
  const review = await Review.findOne({
    tour: tour,
    user: user
  });

  if (review) return next(new AppError('You have already created a review on this tour!', 400));

  next();
});

exports.getAllReviews = factory.getAll(Review);
exports.getReview = factory.getOne(Review);
exports.addAReview = factory.createOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);
