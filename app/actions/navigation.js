import * as types from './types'
import ReactNative from 'react-native'
const { NavigationExperimental } =  ReactNative

export function navigate(action) {
  return (dispatch, getState) => {
    dispatch(navigateForward(action))
  }
}

export function navigateBack() {
  return (dispatch, getState) => {
    dispatch({
      type: types.NAVIGATION_BACK
    })
  }
}

function navigateForward(state) {
  return {
    type: types.NAVIGATION_FORWARD,
    state
  }
}
