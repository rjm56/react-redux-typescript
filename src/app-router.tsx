import * as React from 'react';
import { Router, Route } from 'react-router-dom';
import { appHistory } from './app-history';
import { ToDoContainer, DetailsContainer } from './pages';
import { routes } from './routes';

export const AppRouter = () => {
  return (
    <Router history={appHistory()}>
      <div>
        <Route exact={true} path={routes.home()} component={ToDoContainer}/>
        <Route exact={true} path={routes.details(':itemId')} component={DetailsContainer}/>
      </div>
    </Router>
  );
};
