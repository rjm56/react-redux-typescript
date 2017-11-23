import * as React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { ToDoContainer } from './pages/todo/container';

const logo = require('./logo.svg');

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <ToDoContainer />
      </div>
    </Provider>
  );
};

export default App;
