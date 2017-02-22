import { combineReducers } from 'redux'
import * as booksReducer from './books'

export default combineReducers({
  ...booksReducer,
})
