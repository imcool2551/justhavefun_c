import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { TodoProvider } from './context/TodoContext';
import { CounterProvider } from './context/CounterContext';

import Nav from './components/Nav';
import Todo from './components/Todo';
import TodoDetail from './components/TodoDetail';
import Counter from './components/Counter';
import Signup from './components/Signup';

const App = () => {
  return (
    <TodoProvider>
      <CounterProvider>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/auth/signup" component={Signup} />
            <Route exact path="/todo" component={Todo} />
            <Route path="/todo/:id" component={TodoDetail} />
            <Route path="/counter" component={Counter} />
          </Switch>
        </Router>
      </CounterProvider>
    </TodoProvider>
  );
};

export default App;
