import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe('pk_test_51Iw5YUSCycbhEIix2Dycsst4GDMcrfShWRYXhISxlt5Y4vpQdmmfGOJB7R1VxhlnIWXBHxNbchzw2M4rPp4CWg8X00ewLYIx44');

export const bookTour = async tourID => {
  try {
    // 1) Get the sesssion from the server
    const session = await axios({
      method: 'GET',
      url: `/api/v1/bookings/checkout-session/${tourID}`
    });

    // 2) Create checkout form + charge the credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });

  } catch (err) {
    showAlert('error', 'Something went wrong');
  }
};
