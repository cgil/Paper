import { combineReducers } from 'redux'
import * as entriesReducer from './entries'
import * as navigationReducer from './navigation'

export default combineReducers({
  ...entriesReducer,
  ...navigationReducer,
})
