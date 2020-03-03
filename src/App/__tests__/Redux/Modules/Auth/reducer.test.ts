import {
  IAuthState,
  authReducer,
  AuthActionTypes,
  PostAuthSuccess,
} from 'App/Redux/Modules/Auth';
import { successSigin } from 'App/__mocks__/auth';

describe('Reducer Auth', () => {
  let INITIAL_STATE = {} as IAuthState;

  beforeEach(() => {
    INITIAL_STATE = {
      authenticatedId: '',
      isLoading: false,
      token: '',
    };
  });

  it('should return initial state', () => {
    expect(
      authReducer(undefined, { type: 'without type', payload: {} as any })
    ).toStrictEqual(INITIAL_STATE);
  });
  it('should return new state when authenticate in progress', () => {
    expect(
      authReducer(INITIAL_STATE, {
        type: AuthActionTypes.SIGIN,
        payload: {} as any,
      })
    ).toStrictEqual({
      ...INITIAL_STATE,
      isLoading: true,
    });
  });
  it('should return new state when authenticate success', () => {
    INITIAL_STATE = Object.assign(INITIAL_STATE, {
      ...INITIAL_STATE,
      isLoading: true,
    });

    expect(
      authReducer(
        INITIAL_STATE,
        PostAuthSuccess(successSigin.authenticatedId, successSigin.token)
      )
    ).toStrictEqual({
      authenticatedId: successSigin.authenticatedId,
      isLoading: false,
      token: successSigin.token,
    });
  });
  it('should return state when ocurred error', () => {
    INITIAL_STATE = Object.assign(INITIAL_STATE, {
      ...INITIAL_STATE,
      isLoading: true,
    });

    expect(
      authReducer(INITIAL_STATE, {
        type: AuthActionTypes.ERROR,
        payload: {} as any,
      })
    ).toStrictEqual({
      ...INITIAL_STATE,
      isLoading: false,
    });
  });
});
