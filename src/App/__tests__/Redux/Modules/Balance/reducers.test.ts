import formatCurrency from 'App/Utils/Currency';
import {
  IBalanceState,
  balanceReducer,
  BalanceActionTypes,
  FetchBalanceSuccess,
} from 'App/Redux/Modules/Balance';

describe('Reducer Balance', () => {
  let INITIAL_STATE = {} as IBalanceState;

  beforeEach(() => {
    INITIAL_STATE = {
      isLoading: false,
      ammount: 0,
      formatted_balance: formatCurrency(0),
    };
  });

  it('should return initial state', () => {
    expect(
      balanceReducer(undefined, { type: 'without type', payload: {} as any })
    ).toStrictEqual(INITIAL_STATE);
  });
  it('should return new state when fetch balance in progress', () => {
    expect(
      balanceReducer(INITIAL_STATE, {
        type: BalanceActionTypes.FETCH,
        payload: {} as any,
      })
    ).toStrictEqual({
      ...INITIAL_STATE,
      isLoading: true,
    });
  });
  it('should return new state when fetch balance return success', () => {
    INITIAL_STATE = Object.assign(INITIAL_STATE, {
      ...INITIAL_STATE,
      isLoading: true,
    });

    const formatted_balance = formatCurrency(0);

    expect(
      balanceReducer(
        INITIAL_STATE,
        FetchBalanceSuccess({
          ammount: 0,
          formatted_balance,
        })
      )
    ).toStrictEqual({
      isLoading: false,
      ammount: 0,
      formatted_balance,
    });
  });
  it('should return state when ocurred error', () => {
    INITIAL_STATE = Object.assign(INITIAL_STATE, {
      ...INITIAL_STATE,
      isLoading: true,
    });

    expect(
      balanceReducer(INITIAL_STATE, {
        type: BalanceActionTypes.ERROR,
        payload: {} as any,
      })
    ).toStrictEqual({
      ...INITIAL_STATE,
      isLoading: false,
    });
  });
});
