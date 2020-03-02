import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from 'App/Services/api';
import Jwt from 'App/Utils/Jwt';
import HistoryBrowser from 'App/Utils/HistoryBrowser';
import { toast } from 'react-toastify';
import { IReducerAction } from '..';
import { IAuth, PostAuthSuccess, AuthError, AuthActionTypes } from '.';

function* postAuth(action: IReducerAction<IAuth>) {
  try {
    const response = (yield call(api.post, '/login', action.payload)) as {
      token: string;
    };

    const decryptToken = Jwt.decodeToken(response.token);

    if (typeof decryptToken !== 'string' && decryptToken && decryptToken.id) {
      yield put(PostAuthSuccess(decryptToken.id));

      HistoryBrowser.push('/dashboard');
    }
  } catch (error) {
    yield put(AuthError());

    toast.error(error.message);
  }
}

export default function* AuthSaga() {
  yield all([takeLatest(AuthActionTypes.SIGIN, postAuth)]);
}
