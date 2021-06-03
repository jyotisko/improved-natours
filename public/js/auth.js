import axios from 'axios';
import { showAlert } from './alerts';

export const auth = async (type, data) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `http://127.0.0.1:3000/api/v1/users/${type === 'login' ? 'login' : 'signup'}`,
      data: data
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    let msg = err.response.data.message;
    if (err.response.data.message.includes('User validation failed: passwordConfirm')) msg = 'Your passwords does not match!';
    showAlert('error', msg);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:3000/api/v1/users/logout'
    });
    if ((res.data.status = 'success')) location.reload();
  } catch (err) {
    console.log(err.response);
    showAlert('error', 'Error logging out! Try again.');
  }
};
