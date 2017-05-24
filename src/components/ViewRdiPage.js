import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getAllRdis} from '../actions/rdi.actions';

class ViewRdiPage extends Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    return (
      <div className='section'>
        <div className='container'>
          
          <h3 className='title is-3'>Returned Debit Items:</h3>
          
          <div className='box'>
            {this.props.returnedDebitItems.map((rdi, i, arr) => {
              let text = JSON.stringify(rdi, null, 2);
              text += i < arr.length - 1 ? ',' : '';
              return (
                <pre key={i}>{text}</pre>
              );
            })}
          </div>

        </div>      
      </div>
    );
  }

  componentDidMount () {
    this.props.getAllRdis();
  }
}

function mapStateToProps (state) {
  return {
    loading: state.rdis.loading,
    returnedDebitItems: state.rdis.rdis
  };
}

function mapDispatchToProps (dispatch) {
  return {
    getAllRdis: () => {
      dispatch(getAllRdis());
    }
  };
}

ViewRdiPage.propTypes = {
  loading: PropTypes.bool,
  returnedDebitItems: PropTypes.array,
  getAllRdis: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewRdiPage);