import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from 'App/Services/api';
import { toast } from 'react-toastify';
import { RegisterActionTypes, IRegister } from './types';
import { IReducerAction } from '..';
import { PostRegisterSuccess } from '.';
import { RegisterError } from './actions';

export function* sagaPostRegister(action: IReducerAction<IRegister>) {
  try {
    yield call(api.post, '/account', action.payload);

    yield put(PostRegisterSuccess());
    toast.success('Usuário adicionado com sucesso');
  } catch (error) {
    yield put(RegisterError());

    toast.error(error.message);
  }
}

export default function* RegisterSaga() {
  yield all([takeLatest(RegisterActionTypes.POST, sagaPostRegister)]);
}
