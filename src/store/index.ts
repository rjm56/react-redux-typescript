import { createStore, applyMiddleware, compose } from 'redux';
import 'rxjs/Rx';
import { logger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer } from './root-reducer';
import { rootEpic } from './root-epic';
import { routerMiddleware } from 'react-router-redux';
import { appHistory } from '../app-history';

const epic = createEpicMiddleware(rootEpic);

const middlewareList = [epic, logger, routerMiddleware(appHistory())];

const middlewares = compose(
  applyMiddleware(...middlewareList)
);

const store = createStore(rootReducer, middlewares);

export { store };