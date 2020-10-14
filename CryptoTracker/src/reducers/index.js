/* eslint-disable prettier/prettier */
import { combineReducers } from 'redux';

import cryptoReducer from './cryptoreducer';

export default combineReducers({ crypto: cryptoReducer });
