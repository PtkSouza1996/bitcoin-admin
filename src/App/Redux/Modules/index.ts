import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { IRegisterState, registerReducer, registerSaga } from './Register';
import { IAuthState, authReducer, authSaga } from './Auth';
import { balanceReducer, balanceSaga, IBalanceState } from './Balance';

export type IApplicationState = {
  register: IRegisterState;
  auth: IAuthState;
  balance: IBalanceState;
};

export type IReducerAction<T> = { type: string; payload: T };

const reducers = combineReducers({
  register: registerReducer,
  auth: authReducer,
  balance: balanceReducer,
});

function* rootSaga() {
  yield all([fork(registerSaga), fork(authSaga), fork(balanceSaga)]);
}

export default { reducers, rootSaga };
