import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reducers from './reducers';
import { HashRouter, Switch, Route } from 'react-router-dom'

const store = createStore(Reducers, compose(applyMiddleware(thunk)));

const Root = () => {
  return (
    <HashRouter basename='/'>
      <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/dashboard" component={ Dashboard } />
        <Route path="/register" component={ Register } />
      </Switch>
      </div>
    </HashRouter>
  )
}

export default Root;

ReactDOM.render(
  <Provider store={ store }>
    <Root />
  </Provider>,
document.getElementById('root'));

