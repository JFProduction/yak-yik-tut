import {  createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reducers from '../reducers'

const middleware = applyMiddleware(logger)

export default createStore(reducers, middleware)