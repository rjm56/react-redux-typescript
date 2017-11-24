import { combineReducers } from 'redux';

import { IAppState } from './state';
import { IAppAction } from './app-action';
import { reducers } from './reducers';
import { routerReducer } from 'react-router-redux';

const appReducer = combineReducers({
  ...reducers,
  router: routerReducer
});

export const rootReducer = (state: IAppState, action: IAppAction) => {
  return appReducer(state, action);
};