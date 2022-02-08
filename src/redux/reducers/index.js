import { combineReducers } from 'redux'
import dummyReducer1 from './dummy-reducer1'
import dummyReducer2 from './dummy-reducer2 copy'

const rootReducer = combineReducers({
    dummyReducer1,
    dummyReducer2,
})

export default rootReducer