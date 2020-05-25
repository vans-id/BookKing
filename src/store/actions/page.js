import { FETCH_PAGE } from '../types';
import axios from '../../config/axios';

export const fetchPage = (url, page) => async (
  dispatch
) => {
  try {
    const res = await axios.get(url);

    dispatch({
      type: FETCH_PAGE,
      payload: { [page]: res.data },
    });
  } catch (error) {
    console.log(error);
  }
};
