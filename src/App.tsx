import * as React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { AppRouter } from './app-router';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
