const {ADD_FILE_REQUEST, ADD_FILE_SUCCESS, ADD_FILE_ERROR} = require('../actions/types');

const initialState = {
  loading: false,
  error: null
};

function fileReducer (prevState = initialState, action) {
  const newState = Object.assign({}, prevState);
  
  switch (action.type) {
    case ADD_FILE_REQUEST:
      newState.loading = true;
      break;
    case ADD_FILE_SUCCESS:
      newState.loading = false;
      break;
    case ADD_FILE_ERROR:
      newState.loading = false;
      newState.error = action.data;
      break;
  }

  return newState;
}

module.exports = fileReducer;