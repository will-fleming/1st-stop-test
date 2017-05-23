import * as types from './types';
import axios from 'axios';
import {ROOT} from '../../config';

export function addRdi (data) {
  return function (dispatch) {
    dispatch(addRdiRequest());
    axios
      .post(`${ROOT}/rdi`, {
        ReturnedDebitItem: data
      })
      .then(res => {
        dispatch(addRdiSuccess(res.data));
      })
      .catch(err => {
        dispatch(addRdiError(err));
      });
  };
}

export function addRdiRequest () {
  return {
    type: types.ADD_RDI_REQUEST
  };
}

export function addRdiSuccess (rdi) {
  return {
    type: types.ADD_RDI_SUCCESS,
    data: rdi
  };
}

export function addRdiError (err) {
  return {
    type: types.ADD_RDI_ERROR,
    data: err
  };
}