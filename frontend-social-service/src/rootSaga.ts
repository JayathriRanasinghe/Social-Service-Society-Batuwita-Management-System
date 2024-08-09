// rootSaga.ts
import { all } from 'redux-saga/effects';
import Sagas from './sagas';

export default function* rootSaga() {
    yield all([...Sagas]);
}