import produce from 'immer';
import { IReducerAction } from '..';
import { IRegisterState, RegisterActionTypes } from './types';

const INITIAL_STATE: IRegisterState = {
  isLoading: false,
};
export default function registerReducer(
  state = INITIAL_STATE,
  action: IReducerAction<{}>
) {
  switch (action.type) {
    case RegisterActionTypes.POST:
      return produce(state, draft => {
        draft.isLoading = true;
      });
    case RegisterActionTypes.POST_SUCCESS:
      return produce(state, draft => {
        draft.isLoading = false;
      });
    case RegisterActionTypes.ERROR:
      return produce(state, draft => {
        draft.isLoading = false;
      });
    default:
      return state;
  }
}
