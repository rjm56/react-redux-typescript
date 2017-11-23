import { combineReducers } from 'redux';

import { IAppState } from './state';
import { IAppAction } from './app-action';
import { reducers } from './reducers';

const appReducer = combineReducers({
  ...reducers
});

export const rootReducer = (state: IAppState, action: IAppAction) => {
  return appReducer(state, action);
};