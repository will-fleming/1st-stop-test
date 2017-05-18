import React from 'react';
import PropTypes from 'prop-types';

const Main = props => {
  return (
    <div>
      <h1>WOOOOOOOOP</h1>
      {props.children}
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;