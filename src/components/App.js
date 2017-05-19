import React from 'react';
import PropTypes from 'prop-types';

const App = props => {
  return (
    <div>
      <h1>WOOOOOOOOP</h1>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.node
};

export default App;