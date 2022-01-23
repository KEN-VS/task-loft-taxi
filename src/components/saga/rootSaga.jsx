import { fork, all } from "redux-saga/effects";
import { authSaga } from "./authSaga";
import { regSaga } from "./regSaga";
import { setCardSaga } from "./setCardSaga";


export function* rootSaga() {
  yield all([

    fork(authSaga),

    fork(regSaga),
    fork(setCardSaga),

  ]);
}