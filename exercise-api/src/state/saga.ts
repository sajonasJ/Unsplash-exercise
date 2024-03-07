import { call, put, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { photosFetchSucceeded, photosFetchFailed } from './store';
import { ADDRESS, ACCESSKEY } from './constants';

function* fetchPhotos(): Generator<any, void, AxiosResponse> {
  try {
    const response = yield call(axios.get, `${ADDRESS}photos/?client_id=${ACCESSKEY}&per_page=15`);
    console.dir(response.data); // log the response data
    yield put(photosFetchSucceeded(response.data));
  } catch (e: any) {
    yield put(photosFetchFailed(e.message));
  }
}

function* mySaga() {
  yield takeEvery('PHOTOS_FETCH_REQUESTED', fetchPhotos);
}

export default mySaga;