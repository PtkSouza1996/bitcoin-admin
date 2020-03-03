import formatCurrency from 'App/Utils/Currency';
import {
  BalanceActionTypes,
  FetchBalance,
  FetchBalanceSuccess,
  BalanceError,
} from 'App/Redux/Modules/Balance';
import { balance } from 'App/__mocks__/balance';

describe('Actions Balance', () => {
  it('should create an action to balance request', () => {
    const expectedAction = {
      type: BalanceActionTypes.FETCH,
      payload: {},
    };

    expect(expectedAction).toStrictEqual(FetchBalance());
  });
  it('should create an action to balance request return success', () => {
    const expectedAction = {
      type: BalanceActionTypes.FETCH_SUCCESS,
      payload: {
        ammount: balance.ammount,
        formatted_balance: formatCurrency(balance.ammount),
      },
    };

    expect(expectedAction).toStrictEqual(
      FetchBalanceSuccess({
        ammount: balance.ammount,
        formatted_balance: formatCurrency(balance.ammount),
      })
    );
  });
  it('should create an action to balance request return error', () => {
    const expectedAction = {
      type: BalanceActionTypes.ERROR,
      payload: {},
    };

    expect(expectedAction).toStrictEqual(BalanceError());
  });
});
