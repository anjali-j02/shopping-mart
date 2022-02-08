import { takeLatest, put } from 'redux-saga/effects'

function* getJwtToken2() {
    try {
        yield put({type: 'dummy-saga2', payload: 'dummy-saga2'})
    } catch (error) {

    }
}

const watchDummySaga2 = function* () {
    yield takeLatest('getJwtToken2', getJwtToken2)
}

export default watchDummySaga2