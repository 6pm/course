import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

const getAnswer = (flag) => fetch(`https://yesno.wtf/api?force=${flag}`, { method: 'GET' });

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchAnswer(action) {
    try {
        // те саме що getAnswer(action.flag)
        const user = yield call(getAnswer, action.flag);
        debugger
        // викличе екшен
        yield put({ type: "ANSWER_SUCCESS", user: user });
    } catch (e) {
        yield put({ type: "ANSWER_FAILED", message: e.message });
    }
}

/*
  дозволяє робити декілька конкурентних запитів
*/
function* mySaga() {
    yield takeEvery("GET_ANSWER", fetchAnswer);
}

/*
  не дозволяє робити конкурентні запити. Якщо викликати перший екшен і він буде в процесі,
  потім викликати другий  - перший буде відмінений і другий буде зпрацьовувати
*/
function* mySagaSingle() {
    yield takeLatest("USER_FETCH_REQUESTED", fetchAnswer);
}

export default mySaga;