import createReducer from '../lib/createReducer'
import * as types from '../actions/types'

export const fetchedEntries = createReducer({}, {
  [types.SET_FETCHED_ENTRIES](state, action) {
    let newState = {}
    action.entries.forEach( (entryData) => {
      let id = entryData.id
      let entry = entryData.attributes
      newState[id] = { ...entry, id };
    });
    return newState;
  },
});

export const fetchedEntry = createReducer({}, {
  [types.SET_FETCHED_ENTRY](state, action) {
    let newState = {}
    let id = action.entry.id
    let entry = action.entry.attributes
    newState[id] = { ...entry, id };
    return newState;
  },
});
