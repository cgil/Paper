import ReactNative from 'react-native';
const { NavigationExperimental, StatusBar} = ReactNative;
import * as types from '../actions/types'
import createReducer from '../lib/createReducer'
import Home from '../containers/Home'
import Detail from '../containers/Detail'
import { HOME, DETAIL } from '../constants/routes'

const {
 CardStack: NavigationCardStack,
 StateUtils: NavigationStateUtils
} = NavigationExperimental

export const navigationState = createReducer({ index: 0,
    routes: [
      { key: HOME,  },
      { key: DETAIL },
    ]
  },
  {
    [types.NAVIGATION_FORWARD](state, action) {
      return NavigationStateUtils.forward(state);
    },

    [types.NAVIGATION_BACK](state, action) {
      return NavigationStateUtils.back(state);
    },
});

export const navigationParams = createReducer({ }, {
  [types.NAVIGATION_FORWARD](state, action) {
    return action.state;
  },

});
