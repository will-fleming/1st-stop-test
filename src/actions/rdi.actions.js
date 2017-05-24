import * as types from './types';
import axios from 'axios';
import {ROOT} from '../../config';

export function getAllRdis () {
  return function (dispatch) {
    dispatch(getAllRdisRequest());
    axios
      .get(`${ROOT}/returnedDebitItems`)
      .then(res => {
        dispatch(getAllRdisSuccess(res.data));
      })
      .catch(err => {
        dispatch(getAllRdisError(err));
      });
  };
}

export function getAllRdisRequest () {
  return {
    type: types.GET_RDI_REQUEST
  };
}

export function getAllRdisSuccess (rdi) {
  return {
    type: types.GET_RDI_SUCCESS,
    data: rdi
  };
}

export function getAllRdisError (err) {
  return {
    type: types.GET_RDI_ERROR,
    data: err
  };
}

export function addRdi (data) {
  return function (dispatch) {
    dispatch(addRdiRequest());
    axios
      .post(`${ROOT}/returnedDebitItems`, {
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