import { takeEvery, put, call } from 'redux-saga/effects'
import { serverSaveCartData } from '../../api';
import { sendCardData } from '../redux/actions/sendcarddata';
import { SET_CARD_SUCCESS } from '../redux/types'

export function* setCardSuccessSaga(action) {
  const { cardNumber, expiryDate, cardName, cvc, token } = action.payload;
  const data = yield call(serverSaveCartData, cardNumber, expiryDate, cardName, cvc, token)
  if (data.success) {
    yield put(sendCardData(data.token))
  }
}

export function* setCardSaga() {
  yield takeEvery(SET_CARD_SUCCESS, setCardSuccessSaga)
}