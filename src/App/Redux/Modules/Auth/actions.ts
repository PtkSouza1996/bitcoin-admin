import FactoryAction from 'App/Utils/FactoryAction';
import { AuthActionTypes, IAuth } from './types';

export function PostAuth(data: IAuth) {
  return FactoryAction(AuthActionTypes.SIGIN, data);
}

export function PostAuthSuccess(authenticatedId: string) {
  return FactoryAction(AuthActionTypes.SIGIN_SUCCESS, authenticatedId);
}

export function AuthError() {
  return FactoryAction(AuthActionTypes.ERROR);
}
