import produce from 'immer';
import formatCurrency from 'App/Utils/Currency';
import { IReducerAction } from '..';
import { IBalanceState, BalanceActionTypes, IBalance } from './types';

const INITIAL_STATE: IBalanceState = {
  isLoading: false,
  ammount: 0,
  formatted_balance: formatCurrency(0),
};
export default function balanceReducer(
  state = INITIAL_STATE,
  action: IReducerAction<IBalance>
) {
  switch (action.type) {
    case BalanceActionTypes.FETCH:
      return produce(state, draft => {
        draft.isLoading = true;
      });
    case BalanceActionTypes.FETCH_SUCCESS:
      return produce(state, draft => {
        draft.isLoading = false;
        draft.ammount = action.payload.ammount;
        draft.formatted_balance = action.payload.formatted_balance;
      });
    case BalanceActionTypes.ERROR:
      return produce(state, draft => {
        draft.isLoading = false;
      });
    default:
      return state;
  }
}
