import FactoryAction from 'App/Utils/FactoryAction';
import { IBalance, BalanceActionTypes } from './types';

export function FetchBalance() {
  return FactoryAction(BalanceActionTypes.FETCH);
}

export function FetchBalanceSuccess(data: IBalance) {
  return FactoryAction(BalanceActionTypes.FETCH_SUCCESS, data);
}

export function BalanceError() {
  return FactoryAction(BalanceActionTypes.ERROR);
}
