import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function errorHandler(error) {
  if (error) {
    console.log(error.message);
    let message = 'Something went wrong';
    if (error.response) {
      if (error.response.status === 500) {
        console.log('goes if');
        message = 'Server Error';
      } else {
        console.log('goes else');
        message = error.message;
      }
    }
    console.log(message);
    toast(message);
    return Promise.reject(error);
  }
}
