import api from 'App/Services/api';
import { IReducerAction, IApplicationState } from '..';

export function persistToken(token: string): void {
  api.defaults.headers.authorization = `bearer ${token}`;
}

export function rehydrateToken(
  action: IReducerAction<IApplicationState>
): void {
  if (action.payload && action.payload.auth.token)
    persistToken(action.payload.auth.token);
}
