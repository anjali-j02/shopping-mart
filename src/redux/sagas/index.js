import {all, fork} from 'redux-saga/effects';
import watchDummySaga1 from './dummy-saga1';
import watchDummySaga2 from './dummy-saga2';

const rootSaga = function* () {
    yield all([
        fork(watchDummySaga1),
        fork(watchDummySaga2),
    ])
}

export default rootSaga