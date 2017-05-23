const {expect} = require('chai');
const rdiReducer = require('../src/reducers/rdi.reducer');
const {ADD_RDI_REQUEST, ADD_RDI_SUCCESS, ADD_RDI_ERROR} = require('../src/actions/types');

describe ('rdiReducer(): add rdi actions', () => {
  const initialState = {
    loading: false,
    error: null
  };
  describe ('ADD_RDI_REQUEST', () => {
    it ('does not mutate state', () => {
      const action = {
        type: ADD_RDI_REQUEST
      };
      expect(rdiReducer(null, action)).to.not.equal(initialState);
    });
    it ('replaces state accordingly', () => {
      const exp = {
        loading: true,
        error: null
      };
      const action = {
        type: ADD_RDI_REQUEST
      };
      expect(rdiReducer(initialState, action)).to.eql(exp);
    });
  });
  describe ('ADD_RDI_SUCCESS', () => {
    it ('does not mutate state', () => {
      const action = {
        type: ADD_RDI_SUCCESS
      };
      expect(rdiReducer(null, action)).to.not.equal(initialState);
    });
    it ('replaces state accordingly', () => {
      const exp = {
        loading: false,
        error: null
      };
      const action = {
        type: ADD_RDI_SUCCESS
      };
      expect(rdiReducer(initialState, action)).to.eql(exp);
    });
  });
  describe ('ADD_RDI_ERROR', () => {
    it ('does not mutate state', () => {
      const action = {
        type: ADD_RDI_ERROR,
        data: 'error'
      };
      expect(rdiReducer(null, action)).to.not.equal(initialState);
    });
    it ('replaces state accordingly', () => {
      const exp = {
        loading: false,
        error: 'error'
      };
      const action = {
        type: ADD_RDI_ERROR,
        data: 'error'
      };
      expect(rdiReducer(initialState, action)).to.eql(exp);
    });
  });
});