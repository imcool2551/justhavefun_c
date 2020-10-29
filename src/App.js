import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { TodoProvider } from './context/TodoContext';
import { CounterProvider } from './context/CounterContext';

import Nav from './components/Nav';
import TodoApp from './components/TodoApp';
import Counter from './components/Counter';
import Signup from './components/Signup';
import Home from './components/Home';
import Logout from './components/Logout';

const App = () => {
  return (
    <TodoProvider>
      <CounterProvider>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signup" component={Signup} />
            <Route path="/logout" component={Logout} />
            <Route path="/todo" component={TodoApp} />
            <Route path="/counter" component={Counter} />
          </Switch>
        </Router>
      </CounterProvider>
    </TodoProvider>
  );
};

export default App;
