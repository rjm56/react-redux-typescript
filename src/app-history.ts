import { History } from 'history';
import createHistory from 'history/createBrowserHistory';

// Created when app first loads, saves one version of history vs. a new version each time you change route
const history: History = createHistory();

export const appHistory = (): History => {
  return history;
};