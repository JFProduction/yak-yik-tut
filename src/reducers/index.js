import { combineReducers } from 'redux'

import ZoneReducer from './ZoneReducer'
import CommentReducer from './CommentReducer'

export default combineReducers({
    ZoneReducer,
    CommentReducer
})