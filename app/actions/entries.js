import * as types from './types'
import Api from '../lib/api'
import { ENTRIES, OLDER_ENTRIES } from '../constants/api'

export function fetchEntries(currentOffset=0, pageSize=10, direction=OLDER_ENTRIES) {
  return (dispatch, getState) => {
    return Api.get(`${ENTRIES}/?current_offset=${currentOffset}&page_size=${pageSize}&direction=${direction}`).then(resp => {
      dispatch(setFetchedEntries({ entries: resp }));
    }).catch( (ex) => {
      console.log(ex);
    });
  }
}

export function fetchEntry(entryId) {
  return (dispatch, getState) => {
    return Api.get(`${ENTRIES}/${entryId}`).then(resp => {
      dispatch(setFetchedEntry({entry: resp}));
    }).catch( (ex) => {
      console.log(ex);
    });
  }
}

export function setFetchedEntries({ entries }) {
  return {
    type: types.SET_FETCHED_ENTRIES,
    entries,
  }
}

export function setFetchedEntry({ entry }) {
  return {
    type: types.SET_FETCHED_ENTRY,
    entry,
  }
}
