import * as types from './types';
import axios from 'axios';
import {ROOT} from '../../config';

export function addFile (errors, data) {
  return function (dispatch) {
    if (errors.length) {
      dispatch(addFileError(errors));
      return;
    }
    dispatch(addFileRequest());
    axios
      .post(`${ROOT}/file`, {
        BACSDocument: data
      })
      .then(res => {
        dispatch(addFileSuccess(res.data));
      })
      .catch(err => {
        dispatch(addFileError(err));
      });
  };
}

export function addFileRequest () {
  return {
    type: types.ADD_FILE_REQUEST
  };
}

export function addFileSuccess (file) {
  return {
    type: types.ADD_FILE_SUCCESS,
    data: file
  };
}

export function addFileError (err) {
  return {
    type: types.ADD_FILE_ERROR,
    data: err
  };
}