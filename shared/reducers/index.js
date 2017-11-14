// reducers/index.js

import { combineReducers } from 'redux'
import messageReducer from './message'

const rootReducer = combineReducers({
    message: messageReducer
})

export default rootReducer
