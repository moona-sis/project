import {combineReducers} from 'redux'
import addRequestReducer from './addRequestReducer'
import filterReducer from './filterReducer'
import responseReducer from './responseReducer'

const rootReducer = combineReducers({
    addRequest : addRequestReducer,
    response: responseReducer,
    filter: filterReducer,


})

export default rootReducer