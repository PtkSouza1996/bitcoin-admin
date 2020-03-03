import { runSaga } from 'redux-saga';
import apiMock from 'App/__mocks__/api';
import userRegister from 'App/__mocks__/register';
import {
  sagaPostRegister,
  PostRegister,
  PostRegisterSuccess,
  RegisterError,
} from 'App/Redux/Modules/Register';

describe('Saga Register', () => {
  it('should return success when is valid name,user and password', async () => {
    apiMock.onPost('/account', userRegister).reply(200);

    const dispatch = jest.fn();
    await runSaga(
      { dispatch },
      sagaPostRegister,
      PostRegister(userRegister)
    ).toPromise();

    expect(dispatch).toBeCalledWith(PostRegisterSuccess());
  });
  it('should return error when invalid name,user or password', async () => {
    apiMock.onPost('/account', userRegister).reply(400, {
      message:
        'user validation failed: name: Path `name` is required., email: Path `email` is required.',
      name: 'ValidationError',
    });

    const dispatch = jest.fn();
    await runSaga(
      { dispatch },
      sagaPostRegister,
      PostRegister(userRegister)
    ).toPromise();

    expect(dispatch).toBeCalledWith(RegisterError());
  });
});
