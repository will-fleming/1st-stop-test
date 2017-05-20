import {combineReducers} from 'redux';

import fileReducer from './file.reducer';

export default combineReducers({
    files: fileReducer
});