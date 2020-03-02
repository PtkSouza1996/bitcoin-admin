import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { IRegisterState, registerReducer, registerSaga } from './Register';
import { IAuthState, authReducer, authSaga } from './Auth';

export type IApplicationState = {
  register: IRegisterState;
  auth: IAuthState;
};

export type IReducerAction<T> = { type: string; payload: T };

const reducers = combineReducers({
  register: registerReducer,
  auth: authReducer,
});

function* rootSaga() {
  yield all([fork(registerSaga), fork(authSaga)]);
}

export default { reducers, rootSaga };
