import {actionTypes} from '../actions/allActions'

import initialState from './initialState';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_NAVIGATION:
      console.log('SET_NAVIGATION');
      return Object.assign({}, state, {
        navItemIndex: action.navItemIndex
      })
    default: return state
  }
}
