import 'regenerator-runtime/runtime'
// import '@babel/polyfill';
import { displayMap } from './mapbox.js';
import { auth, logout } from './auth.js';
import { updateSettings } from './updateSettings.js';
import { bookTour } from './stripe.js';
import { starHandler, submitReview, deleteReview } from './review';
import { showAlert } from './alerts.js';

// DOM ELEMENTS
const mapBox = document.getElementById('map');
const loginForm = document.querySelector('.form--login');
const signupForm = document.querySelector('.form--signup');
const logOutBtn = document.querySelector('.nav__el--logout');
const userDataForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-password');
const bookBtn = document.querySelector('#book-tour');
const reviewFormStars = document.querySelectorAll('.reviews__star--rating');
const reviewForm = document.querySelector('.form--review');
const deleteReviewBtn = document.querySelectorAll('.delete-icon');

// DELEGATION
if (mapBox) {
  const locations = JSON.parse(mapBox.dataset.locations);
  displayMap(locations);
}

if (loginForm) {
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    auth('login', {
      email: email,
      password: password
    });
  });
}

if (signupForm) {
  signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const passwordConfirm = document.querySelector('#password-confirm').value;

    auth('signup', {
      name: name,
      email: email,
      password: password,
      passwordConfirm: passwordConfirm
    });
  });
}

if (logOutBtn) logOutBtn.addEventListener('click', logout);

if (userDataForm)
  userDataForm.addEventListener('submit', e => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', document.getElementById('name').value);
    form.append('email', document.getElementById('email').value);
    form.append('photo', document.getElementById('photo').files[0]);
    updateSettings(form, 'data');
  });

if (userPasswordForm)
  userPasswordForm.addEventListener('submit', async e => {
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating...';

    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    await updateSettings(
      { passwordCurrent, password, passwordConfirm },
      'password'
    );

    document.querySelector('.btn--save-password').textContent = 'Save password';
    document.getElementById('password-current').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password-confirm').value = '';
  });

if (bookBtn) {
  bookBtn.addEventListener('click', async e => {
    bookBtn.textContent = 'Processing...';
    const tourID = e.target.dataset.tourId;
    await bookTour(tourID)
    bookBtn.textContent = 'Book Now';
  });
}

if (reviewFormStars) {
  starHandler();
}

if (reviewForm) {
  reviewForm.addEventListener('submit', async e => {
    try {
      e.preventDefault();
      const { tour, user, rating } = document.querySelector('.review__ratings').dataset;
      const review = document.querySelector('#review-text').value;

      await submitReview({
        tour: tour,
        user: user,
        rating: rating,
        review: review
      });

      document.querySelector('.review').remove();
    } catch (err) {
      if (err.message === 'Please provide a rating!') return showAlert('error', 'Please provide a rating!');
      showAlert('error', err.response.data.message)
    }
  });
}

if (deleteReviewBtn) {
  deleteReviewBtn.forEach(btn => {
    btn.addEventListener('click', async e => {
      const { reviewId } = e.target.dataset;
      e.target.closest('.reviews-card').querySelector('.deleting').classList.add('active');
      await deleteReview(reviewId);
      e.target.closest('.reviews-card').remove();
    });
  });
}