const {ADD_RDI_REQUEST, ADD_RDI_SUCCESS, ADD_RDI_ERROR} = require('../actions/types');

const initialState = {
  loading: false,
  error: null
};

function rdiReducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);
  
  switch (action.type) {
    case ADD_RDI_REQUEST:
      newState.loading = true;
      break;
    case ADD_RDI_SUCCESS:
      newState.loading = false;
      break;
    case ADD_RDI_ERROR:
      newState.loading = false;
      newState.error = action.data;
      break;
  }

  return newState;
}

module.exports = rdiReducer;