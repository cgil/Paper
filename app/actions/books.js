import * as types from './types'
import Api from '../lib/api'

export function fetchBooks(genre) {
  return (dispatch, getState) => {
    const params = [
      `genre=${encodeURIComponent(genre)}`
    ].join('&')
    return Api.get(`/api/?${params}`).then(resp => {
      dispatch(setFetchedBooks({books: resp}));
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
