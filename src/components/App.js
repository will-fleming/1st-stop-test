import React from 'react';
import PropTypes from 'prop-types';

import NavBar from './NavBar';

const App = props => {
  return (
    <div>
      <NavBar/>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node
};

export default App;