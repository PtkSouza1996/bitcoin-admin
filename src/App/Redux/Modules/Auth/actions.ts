import FactoryAction from 'App/Utils/FactoryAction';
import { AuthActionTypes, IAuth } from './types';
import { IReducerAction } from '..';

export function PostAuth(data: IAuth) {
  return FactoryAction(AuthActionTypes.SIGIN, data);
}

export function PostAuthSuccess(authenticatedId: string, token: string) {
  return FactoryAction(AuthActionTypes.SIGIN_SUCCESS, {
    authenticatedId,
    token,
  });
}

export function AuthError(): IReducerAction<{}> {
  return FactoryAction(AuthActionTypes.ERROR);
}
