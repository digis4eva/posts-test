import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import posts from './posts'

const composeEnhancers =
  (window && window.location.host === 'localhost:3000' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const storeFactory = () => createStore(combineReducers({ posts }), composeEnhancers(applyMiddleware(thunk)))
