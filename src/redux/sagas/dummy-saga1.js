import { takeLatest, put } from 'redux-saga/effects'

function* getJwtToken1() {
    try {
        yield put({type: 'dummy-saga1', payload: 'dummy-saga1'})
    } catch (error) {

    }
}

const watchDummySaga1 = function* () {
    yield takeLatest('getJwtToken1', getJwtToken1)
}

export default watchDummySaga1