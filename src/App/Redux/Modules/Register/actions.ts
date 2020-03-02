import FactoryAction from 'App/Utils/FactoryAction';
import { IRegister, RegisterActionTypes } from './types';

export function PostRegister(data: IRegister) {
  return FactoryAction(RegisterActionTypes.POST, data);
}

export function PostRegisterSuccess() {
  return FactoryAction(RegisterActionTypes.POST_SUCCESS);
}

export function RegisterError() {
  return FactoryAction(RegisterActionTypes.ERROR);
}
