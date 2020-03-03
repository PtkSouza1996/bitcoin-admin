import {
  IRegisterState,
  registerReducer,
  RegisterActionTypes,
  PostRegisterSuccess,
} from 'App/Redux/Modules/Register';

describe('Reducer Register', () => {
  let INITIAL_STATE = {} as IRegisterState;

  beforeEach(() => {
    INITIAL_STATE = {
      isLoading: false,
    };
  });

  it('should return initial state', () => {
    expect(
      registerReducer(undefined, { type: 'without type', payload: {} as any })
    ).toStrictEqual(INITIAL_STATE);
  });
  it('should return new state when register in progress', () => {
    expect(
      registerReducer(INITIAL_STATE, {
        type: RegisterActionTypes.POST,
        payload: {} as any,
      })
    ).toStrictEqual({
      isLoading: true,
    });
  });
  it('should return new state when register success', () => {
    INITIAL_STATE = Object.assign(INITIAL_STATE, {
      ...INITIAL_STATE,
      isLoading: true,
    });

    expect(registerReducer(INITIAL_STATE, PostRegisterSuccess())).toStrictEqual(
      {
        isLoading: false,
      }
    );
  });
  it('should return state when ocurred error', () => {
    INITIAL_STATE = Object.assign(INITIAL_STATE, {
      isLoading: true,
    });

    expect(
      registerReducer(INITIAL_STATE, {
        type: RegisterActionTypes.ERROR,
        payload: {} as any,
      })
    ).toStrictEqual({
      isLoading: false,
    });
  });
});
