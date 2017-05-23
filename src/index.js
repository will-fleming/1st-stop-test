import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import App from './components/App';
import AddDataPage from './components/AddDataPage';
import ViewDataPage from './components/ViewDataPage';
import ViewRdiPage from './components/ViewRdiPage';

import reducer from './reducers/index.reducer';

import './index.css';
import 'bulma/css/bulma.css';

const logger = createLogger();
const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render((
  <Provider store={store}>
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={AddDataPage}/>
      <Route path='/addData' component={AddDataPage}/>
      <Route path='/viewData' component={ViewDataPage}/>
      <Route path='/viewRdi' component={ViewRdiPage}/>
    </Route>
  </Router>
  </Provider>
), document.getElementById('root'));