import { takeEvery, put, call } from 'redux-saga/effects'
import { serverSignUp } from '../../api';
import { signUp } from '../redux/actions/authorization';
import { REGISTRATION } from '../redux/types'

export function* registrationSaga(action) {
  const { email, password, name, surname } = action.payload;
  const data = yield call(serverSignUp, email, password, name, surname)
  if (data.success) {
    yield put(signUp(data.token))
  }
}

export function* regSaga() {
  yield takeEvery(REGISTRATION, registrationSaga)
}