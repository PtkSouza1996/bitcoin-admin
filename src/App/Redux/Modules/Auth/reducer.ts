import produce from 'immer';
import { IReducerAction } from '..';
import { AuthActionTypes, IAuthState } from './types';

const INITIAL_STATE: IAuthState = {
  isLoading: false,
  authenticatedId: '',
};
export default function authReducer(
  state = INITIAL_STATE,
  action: IReducerAction<string>
) {
  switch (action.type) {
    case AuthActionTypes.SIGIN:
      return produce(state, draft => {
        draft.isLoading = true;
      });
    case AuthActionTypes.SIGIN_SUCCESS:
      return produce(state, draft => {
        draft.isLoading = false;
        draft.authenticatedId = action.payload;
      });
    case AuthActionTypes.ERROR:
      return produce(state, draft => {
        draft.isLoading = false;
      });
    default:
      return state;
  }
}
