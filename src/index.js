import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import Main from './components/Main';

// import 'font-awesome/scss/font-awesome.scss';
// import '../src/styles/styles.scss';
// import reducer from './reducer/index.reducer';


// const logger = createLogger();
// const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render((
  // <Provider store={store}>
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      
    </Route>
  </Router>
  // </Provider>
), document.getElementById('root'));