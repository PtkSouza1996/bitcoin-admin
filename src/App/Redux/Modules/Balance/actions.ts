import FactoryAction from 'App/Utils/FactoryAction';
import { IBalance, BalanceActionTypes } from './types';
import { IReducerAction } from '..';

export function FetchBalance(): IReducerAction<{}> {
  return FactoryAction(BalanceActionTypes.FETCH);
}

export function FetchBalanceSuccess(data: IBalance) {
  return FactoryAction(BalanceActionTypes.FETCH_SUCCESS, data);
}

export function BalanceError(): IReducerAction<{}> {
  return FactoryAction(BalanceActionTypes.ERROR);
}
