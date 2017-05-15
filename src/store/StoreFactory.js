import { combineReducers, createStore, applyMiddleware } from 'redux'
import { ZoneReducer, CommentReducer } from '../reducers'

const reducers = combineReducers({
    zone: ZoneReducer,
    comment: CommentReducer
})

const logger = (store) => (next) => (actions) => {
    console.log('action fired', actions)
    next(actions)
}

const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware)

export default store