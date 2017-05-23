import {combineReducers} from 'redux';

import fileReducer from './file.reducer';
import rdiReducer from './rdi.reducer';

export default combineReducers({
    files: fileReducer,
    rdis: rdiReducer
});