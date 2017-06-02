import React from 'react';
import PropTypes from 'prop-types';

const Error = (props) => {
  if (!props.error) return null;
  
  return (
    <div className='message is-danger'>
      <div className='message-header'>
        <p>Error</p>
      </div>
      <div className='message-body'>
        Input and Output directories must exist and have correct paths.
      </div>
    </div>
  );
};

Error.propTypes = {
  error: PropTypes.bool
};

export default Error;