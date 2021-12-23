import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import PostReduce from './reduces/posts'
import AuthReducer from './reduces/auth'
// import appReducer from './reduces/app'

const rootReducer = combineReducers({ posts: PostReduce, auth: AuthReducer })

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store

window.store = store
