import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from 'redux/sagas'
import rootReducer from 'redux/reducers'

const sagaMiddleware = createSagaMiddleware()

const middleware = applyMiddleware(sagaMiddleware)

const store = createStore(rootReducer, middleware)

sagaMiddleware.run(rootSaga)

export default store

/* if using __REDUX_DEVTOOLS_EXTENSION__

import {compose} from 'redux'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() || compose
const store = createStore(rootReducer, composeEnhancers(middleware))

*/