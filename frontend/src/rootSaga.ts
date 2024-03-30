import { all } from "redux-saga/effects";
import Sagas from "./sagas";

let sagas = [...Sagas];

function* rootSaga() {
  yield all(sagas);
}

export default rootSaga;
