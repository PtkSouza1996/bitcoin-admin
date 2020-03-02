export type IBalanceState = {
  readonly isLoading: boolean;
  readonly ammount: number;
  readonly formatted_balance: string;
};

export type IBalance = {
  ammount: number;
  formatted_balance: string;
};

export const BalanceActionTypes = {
  FETCH: '@@balance/FETCH',
  FETCH_SUCCESS: '@@balance/FETCH_SUCCESS',
  ERROR: '@@balance/ERROR',
};
