import {
  RegisterActionTypes,
  RegisterError,
  PostRegisterSuccess,
  PostRegister,
} from 'App/Redux/Modules/Register';
import userRegister from 'App/__mocks__/register';

describe('Actions Register', () => {
  it('should create an action to register request', () => {
    const expectedAction = {
      type: RegisterActionTypes.POST,
      payload: userRegister,
    };

    expect(expectedAction).toStrictEqual(PostRegister(userRegister));
  });
  it('should create an action to register request return success', () => {
    const expectedAction = {
      type: RegisterActionTypes.POST_SUCCESS,
      payload: {},
    };

    expect(expectedAction).toStrictEqual(PostRegisterSuccess());
  });
  it('should create an action to register request return error', () => {
    const expectedAction = {
      type: RegisterActionTypes.ERROR,
      payload: {},
    };

    expect(expectedAction).toStrictEqual(RegisterError());
  });
});
