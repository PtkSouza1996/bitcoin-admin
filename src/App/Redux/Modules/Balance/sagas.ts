import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from 'App/Services/api';
import { toast } from 'react-toastify';
import formatCurrency from 'App/Utils/Currency';
import { BalanceActionTypes, IBalance } from './types';
import { FetchBalanceSuccess } from '.';
import { BalanceError } from './actions';

function* fetchBalance() {
  try {
    const response = (yield call(api.get, '/account/balance')) as {
      balance: number;
    };

    const balance: IBalance = {
      ammount: response.balance || 0,
      formatted_balance: formatCurrency(response.balance || 0),
    };

    yield put(FetchBalanceSuccess(balance));
  } catch (error) {
    yield put(BalanceError());

    toast.error(`Saldo -> ${error.message}`);
  }
}

export default function* BalanceSaga() {
  yield all([takeLatest(BalanceActionTypes.FETCH, fetchBalance)]);
}
