import { Dispatch } from 'redux';
import { IAppState } from './store/state';
import { fetchTodoList } from './store/actions/index';

export const bootstrap = {
  init(dispatch: Dispatch<IAppState>) {
    dispatch(fetchTodoList());
  }
};