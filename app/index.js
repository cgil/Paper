import React, { Component } from 'react';
import { createStore, applyMiddleware, compose} from 'redux'
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import AppContainer from './containers/AppContainer';
import reducer from './reducers';

// middleware that logs actions
const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__  });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

export default class Index extends Component { // eslint-disable-line
  render() { // eslint-disable-line
    return (
      <Provider store={store} >
        <AppContainer />
      </Provider>
    );
  }
}
