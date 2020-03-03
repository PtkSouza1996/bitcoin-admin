import { runSaga } from 'redux-saga';
import apiMock from 'App/__mocks__/api';
import { userSigin, successSigin, errorSigin } from 'App/__mocks__/auth';
import {
  PostAuth,
  PostAuthSuccess,
  sagaPostAuth,
  AuthError,
} from 'App/Redux/Modules/Auth';

describe('Saga Auth', () => {
  it('should return success when is valid user and password', async () => {
    apiMock.onPost('/login', userSigin).reply(200, successSigin);

    const dispatch = jest.fn();
    await runSaga({ dispatch }, sagaPostAuth, PostAuth(userSigin)).toPromise();

    expect(dispatch).toBeCalledWith(
      PostAuthSuccess(successSigin.authenticatedId, successSigin.token)
    );
  });
  it('should return error when invalid user and password', async () => {
    apiMock.onPost('/login', userSigin).reply(401, errorSigin);

    const dispatch = jest.fn();
    await runSaga({ dispatch }, sagaPostAuth, PostAuth(userSigin)).toPromise();

    expect(dispatch).toBeCalledWith(AuthError());
  });
});
