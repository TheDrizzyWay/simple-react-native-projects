/* eslint-disable prettier/prettier */
import { FETCH_COIN_DATA_INIT, FETCH_COIN_DATA_SUCCESS, FETCH_COIN_DATA_FAILURE } from '../utils/ActionTypes';

const initialState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null,
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_COIN_DATA_INIT:
      return Object.assign({}, state, {
        isFetching: true,
        data: [],
        hasError: false,
        errorMessage: null,
      });
    case FETCH_COIN_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: payload,
        hasError: false,
        errorMessage: null,
      });
    case FETCH_COIN_DATA_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        data: payload,
        hasError: true,
        errorMessage: 'something went wrong',
      });
    default:
      return state;
  }
}
