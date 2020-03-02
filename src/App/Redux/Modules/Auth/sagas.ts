import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from 'App/Services/api';
import Jwt from 'App/Utils/Jwt';
import HistoryBrowser from 'App/Utils/HistoryBrowser';
import { toast } from 'react-toastify';
import { IReducerAction } from '..';
import { IAuth, PostAuthSuccess, AuthError, AuthActionTypes } from '.';
import { rehydrateToken, persistToken } from './services';

function* postAuth(action: IReducerAction<IAuth>) {
  try {
    const { token } = (yield call(api.post, '/login', action.payload)) as {
      token: string;
    };

    const decryptToken = Jwt.decodeToken(token);

    if (typeof decryptToken !== 'string' && decryptToken && decryptToken.id) {
      persistToken(token);
      yield put(PostAuthSuccess(decryptToken.id, token));

      HistoryBrowser.push('/dashboard');
    }
  } catch (error) {
    yield put(AuthError());

    toast.error(error.message);
  }
}

export default function* AuthSaga() {
  yield all([
    takeLatest(AuthActionTypes.SIGIN, postAuth),
    takeLatest('persist/REHYDRATE', rehydrateToken),
  ]);
}
