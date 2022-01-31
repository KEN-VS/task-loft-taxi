import { takeEvery, put, call } from 'redux-saga/effects'
import { serverLogIn } from '../../api';
import { logIn } from '../redux/actions/authorization';
import { AUTHENTICATE } from '../redux/types'

export function* authenticateSaga(action) {
  const { email, password } = action.payload;
  const data = yield call(serverLogIn, email, password)
  if (data.success) {
    yield put(logIn(data.token))
  }
}

export function* authSaga() {
  yield takeEvery(AUTHENTICATE, authenticateSaga)
}