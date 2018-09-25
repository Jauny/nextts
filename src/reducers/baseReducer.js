import {actionTypes} from '../actions/allActions'

import initialState from './initialState';

export const base = (state = initialState.base, action) => {
  switch (action.type) {
    case actionTypes.SET_NAVIGATION:
      console.log('SET_NAVIGATION');
      return Object.assign({}, state, {
        navItemIndex: action.navItemIndex
      })
    default: return state
  }
}
