import { CHECKOUT_BOOKING } from '../types';
import axios from '../../config/axios';

export const checkoutBooking = (payload) => (
  dispatch
) => {
  dispatch({
    type: CHECKOUT_BOOKING,
    payload,
  });
};

export const submitBooking = (payload) => () => {
  return axios.post(`/booking-page`, payload, {
    headers: {
      'content-type': 'multipart/formdata',
    },
  });
};
