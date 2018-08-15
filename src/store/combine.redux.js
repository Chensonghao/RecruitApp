import { auth } from './auth.redux';
import { counter } from './count.redux';
import { combineReducers } from 'redux';

export default combineReducers({ counter, combineReducers });
