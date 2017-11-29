// reducers/index.js

import { combineReducers } from 'redux';
import messageReducer from './message';
import characterReducer from './character';
const rootReducer = combineReducers({
    message: messageReducer,
    character: characterReducer
})

export default rootReducer
