const {expect} = require('chai');
const fileReducer = require('../src/reducers/file.reducer');
const {ADD_FILE_REQUEST, ADD_FILE_SUCCESS, ADD_FILE_ERROR} = require('../src/actions/types');

describe ('fileReducer(): add file actions', () => {
  const initialState = {
    loading: false,
    error: null
  };
  describe ('ADD_FILE_REQUEST', () => {
    it ('does not mutate state', () => {
      const action = {
        type: ADD_FILE_REQUEST
      };
      expect(fileReducer(null, action)).to.not.equal(initialState);
    });
    it ('replaces state accordingly', () => {
      const exp = {
        loading: true,
        error: null
      };
      const action = {
        type: ADD_FILE_REQUEST
      };
      expect(fileReducer(initialState, action)).to.eql(exp);
    });
  });
  describe ('ADD_FILE_SUCCESS', () => {
    it ('does not mutate state', () => {
      const action = {
        type: ADD_FILE_SUCCESS
      };
      expect(fileReducer(null, action)).to.not.equal(initialState);
    });
    it ('replaces state accordingly', () => {
      const exp = {
        loading: false,
        error: null
      };
      const action = {
        type: ADD_FILE_SUCCESS
      };
      expect(fileReducer(initialState, action)).to.eql(exp);
    });
  });
  describe ('ADD_FILE_ERROR', () => {
    it ('does not mutate state', () => {
      const action = {
        type: ADD_FILE_ERROR,
        data: 'error'
      };
      expect(fileReducer(null, action)).to.not.equal(initialState);
    });
    it ('replaces state accordingly', () => {
      const exp = {
        loading: false,
        error: 'error'
      };
      const action = {
        type: ADD_FILE_ERROR,
        data: 'error'
      };
      expect(fileReducer(initialState, action)).to.eql(exp);
    });
  });
});