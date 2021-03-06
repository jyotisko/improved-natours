const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Tour = require('./../models/tourModel');
const Booking = require('./../models/bookingModel');
const catchAsync = require('./../utils/catchAsync');
const factory = require('./../controllers/handlerFactory');
const User = require('../models/userModel');

exports.getCheckoutSession = catchAsync(async (req, res, next) => {
  // 1) Get the current booked tour
  const tour = await Tour.findById(req.params.tourID);

  // 2) Create checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    // success_url: `${req.protocol}://${req.get('host')}?tour=${req.params.tourID}&user=${req.user._id}&price=${tour.price}`,
    success_url: `${req.protocol}://${req.get('host')}/my-tours`,
    cancel_url: `${req.protocol}://${req.get('host')}/tour/${tour.slug}`,
    customer_email: req.user.email,
    client_reference_id: req.params.tourID,
    line_items: [
      {
        name: `${tour.name} Tour`,
        description: tour.summary,
        images: [`${req.protocol}://${req.get('host')}/img/tours/${tour.imageCover}`],
        amount: tour.price * 100,
        currency: 'usd',
        quantity: 1
      }
    ]
  });

  // 3) Create session on response
  res.status(200).json({
    status: 'success',
    session: session
  })
});

/*
exports.createBookingCheckout = catchAsync(async (req, res, next) => {
  const { tour, user, price } = req.query;
  if (!tour || !user || !price) return next();

  await Booking.create({
    user: user,
    tour: tour,
    price: price
  });

  res.redirect(req.originalUrl.split('?')[0]);
  next();
}); */

const createBookingCheckout = async session => {
  try {
    const tour = session.client_reference_id;
    const user = (await User.findOne({ email: session.customer_email }))._id;
    const price = session.amount_total / 100;
    await Booking.create({
      user: user,
      tour: tour,
      price: price
    });
  } catch (err) {
    console.log(err);
  }
};

exports.webhookCheckout = (req, res, next) => {
  const signature = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, signature, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Weekhook error: ${err.message}`)
  }

  if (event.type === 'checkout.session.completed') createBookingCheckout(event.data.object);

  res.status(200).json({
    received: true
  });
};

exports.createBooking = factory.createOne(Booking);
exports.getBooking = factory.getOne(Booking);
exports.getAllBooking = factory.getAll(Booking);
exports.updateBooking = factory.updateOne(Booking);
exports.deleteBooking = factory.deleteOne(Booking);