import { runSaga } from 'redux-saga';
import apiMock from 'App/__mocks__/api';
import { balance, balanceResult } from 'App/__mocks__/balance';
import {
  sagaFetchBalance,
  FetchBalanceSuccess,
  BalanceError,
} from 'App/Redux/Modules/Balance';

describe('Saga Balance', () => {
  it('should return success', async () => {
    apiMock.onGet('/account/balance').reply(200, balance);

    const dispatch = jest.fn();
    await runSaga({ dispatch }, sagaFetchBalance).toPromise();

    expect(dispatch).toBeCalledWith(FetchBalanceSuccess(balanceResult));
  });
  it('should return error', async () => {
    apiMock.onGet('/account/balance').networkError();

    const dispatch = jest.fn();
    await runSaga({ dispatch }, sagaFetchBalance).toPromise();

    expect(dispatch).toBeCalledWith(BalanceError());
  });
});
