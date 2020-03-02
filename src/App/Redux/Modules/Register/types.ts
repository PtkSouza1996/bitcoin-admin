export type IRegisterState = {
  readonly isLoading: boolean;
};

export type IRegister = {
  name: string;
  email: string;
  password: string;
};

export const RegisterActionTypes = {
  POST: '@@register/POST',
  POST_SUCCESS: '@@register/POST_SUCCESS',
  ERROR: '@@register/ERROR',
};
