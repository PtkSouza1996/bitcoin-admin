export type IAuthState = {
  readonly isLoading: boolean;
  readonly authenticatedId: string;
};

export type IAuth = {
  email: string;
  password: string;
};

export const AuthActionTypes = {
  SIGIN: '@@auth/SIGIN',
  SIGIN_SUCCESS: '@@auth/SIGIN_SUCCESS',
  ERROR: '@@auth/ERROR',
};
