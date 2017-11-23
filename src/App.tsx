import * as React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import { ToDoContainer } from './pages/todo/container';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <div className="App">
        <ToDoContainer />
      </div>
    </Provider>
  );
};

export default App;
