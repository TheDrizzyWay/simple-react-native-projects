/* eslint-disable prettier/prettier */
import axios from 'axios';

import { apiUrl } from '../utils/Constants';
import { FETCH_COIN_DATA_INIT, FETCH_COIN_DATA_SUCCESS, FETCH_COIN_DATA_FAILURE } from '../utils/ActionTypes';

export default function fetchCoinData() {
  return dispatch => {
    dispatch({ type: FETCH_COIN_DATA_INIT });

    return axios.get(`${apiUrl}/v1/cryptocurrency/listings/latest?limit=20`)
      .then(res => {
        dispatch({ type: FETCH_COIN_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_COIN_DATA_FAILURE, error: err.message });
      });
  };
}
