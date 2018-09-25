import {actionTypes} from '../actions/allActions'
import {combineReducers} from 'redux';

import initialState from './initialState';

import {base} from './baseReducer';
import {products} from './productsReducer';

export default combineReducers({
  base,
  products
});
