import produce from 'immer';
import { IReducerAction } from '..';
import { AuthActionTypes, IAuthState } from './types';

const INITIAL_STATE: IAuthState = {
  isLoading: false,
  authenticatedId: '',
  token: '',
};
export default function authReducer(
  state = INITIAL_STATE,
  action: IReducerAction<{ authenticatedId: string; token: string }>
) {
  switch (action.type) {
    case AuthActionTypes.SIGIN:
      return produce(state, draft => {
        draft.isLoading = true;
      });
    case AuthActionTypes.SIGIN_SUCCESS:
      return produce(state, draft => {
        draft.isLoading = false;
        draft.authenticatedId = action.payload.authenticatedId;
        draft.token = action.payload.token;
      });
    case AuthActionTypes.ERROR:
      return produce(state, draft => {
        draft.isLoading = false;
      });
    default:
      return state;
  }
}
