import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';

function* headInputFocusedSaga() {
    try {
        yield put({type: "HEADER_INPUT_FOCUSED"});
    } catch (e) {
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* headInputBlurSaga() {
    try {
        yield put({type: "HEADER_INPUT_BLUR"});
    } catch (e) {
        // yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
}

function* watchHeadSaga() {
    yield takeEvery("HEADER_INPUT_FOCUSED", headInputFocusedSaga);
    yield takeEvery("HEADER_INPUT_BLUR", headInputBlurSaga);

}


export default watchHeadSaga;