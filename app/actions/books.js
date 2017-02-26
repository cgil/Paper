import * as types from './types'
import Api from '../lib/api'
import { BOOKS } from '../constants/api'

export function fetchBooks(genre) {
  return (dispatch, getState) => {
    return Api.get(BOOKS).then(resp => {
      dispatch(setFetchedBooks({ books: resp }));
    }).catch( (ex) => {
      console.log(ex);
    });
  }
}

export function setFetchedBooks({ books }) {
  return {
    type: types.SET_FETCHED_BOOKS,
    books,
  }
}
