import { takeEvery, put, call } from 'redux-saga/effects'
import { serverSaveCartData } from '../../api';
import { setCartSuccess } from '../redux/actions/sendcarddata';
import { SEND_CARD_DATA } from '../redux/types'

export function* sendCardDataSaga(action) {
  const { cardNumber, expiryDate, cardName, cvc, token } = action.payload;
  const data = yield call(serverSaveCartData, cardNumber, expiryDate, cardName, cvc, token)
  if (data.success) {
    yield put(setCartSuccess(data.token))
  }
}

export function* setCardSaga() {
  yield takeEvery(SEND_CARD_DATA, sendCardDataSaga)
}