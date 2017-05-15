import {  createStore, applyMiddleware } from 'redux'
import reducers from '../reducers'

const logger = (store) => (next) => (actions) => {
    console.log('action fired', actions)
    next(actions)
}

const middleware = applyMiddleware(logger)

export default createStore(reducers, middleware)