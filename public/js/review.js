import axios from 'axios';
import catchAsync from '../../utils/catchAsync';
import { showAlert } from './alerts';

export const starHandler = () => {
  const reviewFormStars = document.querySelectorAll('.reviews__star--rating');

  return reviewFormStars.forEach(reviewStar => {

    reviewStar.addEventListener('click', () => {
      const id = reviewStar.dataset.id;

      reviewFormStars.forEach(star => {
        star.classList.add('reviews__star--inactive');
        star.classList.remove('reviews__star--active');
        if (star.dataset.id <= id) {
          star.classList.remove('reviews__star--inactive');
          star.classList.add('reviews__star--active');
        }
      });

      document.querySelector('.review__ratings').dataset.rating = id;
    });
  });
};

export const submitReview = async data => {
  try {
    if (data.rating <= 0) return showAlert('error', 'Please provide a rating');

    const res = await axios({
      method: 'POST',
      url: '/api/v1/reviews',
      data: data
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Review submitted successfully!');
      setTimeout(() => location.reload(), 1000);
    }

  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const deleteReview = async reviewID => {
  try {
    const res = await axios({
      method: 'DELETE',
      url: `/api/v1/reviews/${reviewID}`
    });

    if (res.data === '') showAlert('success', 'Review deleted successfully!');

  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};