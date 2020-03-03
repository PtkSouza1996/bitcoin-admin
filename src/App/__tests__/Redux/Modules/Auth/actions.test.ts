import {
  AuthActionTypes,
  PostAuth,
  PostAuthSuccess,
  AuthError,
} from 'App/Redux/Modules/Auth';
import { userSigin, successSigin } from 'App/__mocks__/auth';

describe('Actions Auth', () => {
  it('should create an action to auth request', () => {
    const expectedAction = {
      type: AuthActionTypes.SIGIN,
      payload: userSigin,
    };

    expect(expectedAction).toStrictEqual(PostAuth(userSigin));
  });
  it('should create an action to auth request return success', () => {
    const expectedAction = {
      type: AuthActionTypes.SIGIN_SUCCESS,
      payload: { ...successSigin },
    };

    expect(expectedAction).toStrictEqual(
      PostAuthSuccess(successSigin.authenticatedId, successSigin.token)
    );
  });
  it('should create an action to auth request return error', () => {
    const expectedAction = {
      type: AuthActionTypes.ERROR,
      payload: {},
    };

    expect(expectedAction).toStrictEqual(AuthError());
  });
});
