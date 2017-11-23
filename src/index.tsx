import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { store } from './store';
import { bootstrap } from './bootstrap';

bootstrap
  .init(store.dispatch);

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root') as HTMLElement
);