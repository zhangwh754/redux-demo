import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import user from './user/reducer'

// 开启redux调试工具
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const reducer = combineReducers({
  user
})

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store
