import axios from 'axios';

import errorHandler from './errorHandler.js';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_HOST}/api/v1/member`,
});

instance.interceptors.response.use(
  (res) => res,
  errorHandler
);

export default instance;
