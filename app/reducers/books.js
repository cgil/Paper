import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const fetchedBooks = createReducer({}, {
  [types.SET_FETCHED_BOOKS](state, action) {
    let newState = {}
    action.books.forEach( (bookData) => {
      let id = bookData.id
      let book = bookData.attributes
      newState[id] = { ...book, id };
    });
    return newState;
  },
});

export const fetchedBook = createReducer({}, {
  [types.SET_FETCHED_BOOK](state, action) {
    let newState = {}
    let id = action.book.id
    let book = action.book.attributes
    newState[id] = { ...book, id };
    return newState;
  },
});
