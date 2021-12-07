import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import PostReduce from './reduces/posts'
import AuthReducer from './reduces/auth'

const rootReducer = combineReducers({ posts: PostReduce, auth: AuthReducer })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

window.store = store
