import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { sidebar, bosses, settings } from './reducers'

export type TRootReducer = typeof rootReducer

const content = combineReducers({
  bosses,
})

const rootReducer = combineReducers({
  sidebar,
  content,
  settings,
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store
