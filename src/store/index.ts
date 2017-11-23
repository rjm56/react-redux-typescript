import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { rootReducer } from './root-reducer';
import { rootEpic } from './root-epic';

const epic = createEpicMiddleware(rootEpic);

const middlewareList = [epic, logger];

const middlewares = compose(
  applyMiddleware(...middlewareList)
);

const store = createStore(rootReducer, middlewares);

export { store };