import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import {reducer} from '../reducers/allReducers'

export function initializeStore () {
  return createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
