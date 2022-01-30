import { takeEvery, put, call } from 'redux-saga/effects'
import { serverGetCartData } from '../../api';
import { getCardSuccess } from '../redux/actions/sendcarddata';
import { GET_CARD_DATA } from '../redux/types';


export function* getCardSuccessSaga(action) {
  const { token } = action.payload;
  const data = yield call(serverGetCartData, token)
  if (data.success) {
    yield put(getCardSuccess(data.cardNumber))
  }
}

export function* getCardSaga() {
  yield takeEvery(GET_CARD_DATA, getCardSuccessSaga)
}