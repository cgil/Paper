import { combineReducers } from 'redux'
import * as booksReducer from './books'
import * as navigationReducer from './navigation'

export default combineReducers({
  ...booksReducer,
  ...navigationReducer,
})
