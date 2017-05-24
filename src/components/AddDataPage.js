import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {addFile} from '../actions/file.actions';
import {addRdi} from '../actions/rdi.actions';

import parseDirectoryToJson from '../lib/xml-to-json';

class AddDataPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      inputDir: '',
      outputDir: ''
    };
    this.updateInputDir = this.updateInputDir.bind(this);
    this.updateOutputDir = this.updateOutputDir.bind(this);
    this.handleParse = this.handleParse.bind(this);
  }

  updateInputDir (event) {
    this.setState({
      inputDir: event.target.value
    });
  }

  updateOutputDir (event) {
    this.setState({
      outputDir: event.target.value
    });
  }

  handleParse () {
    const inDir = this.state.inputDir;
    const outDir = this.state.outputDir;
    parseDirectoryToJson(inDir, outDir).forEach(file => {
      this.props.addFile(file);
      file.Data.ARUDD.Advice.OriginatingAccountRecords.OriginatingAccountRecord.ReturnedDebitItem.forEach(rdi => {
        this.props.addRdi(rdi);
      });
    });
  }

  render () {
    return (
      <div className='section'>
        <div className='container'>

          <div className='field'>
            <label className='label'>xml Source Directory:</label>
            <p className='control'>
              <input 
                  className='input'
                  type='text' 
                  placeholder='path to directory'
                  value={this.state.inputDir}
                  onChange={this.updateInputDir}
              />
            </p>
          </div>

          <div className='field'>
            <label className='label'>output directory:</label>
            <p className='control'>
              <input 
                  className='input'
                  type='text' 
                  placeholder='path to directory'
                  value={this.state.outputDir}
                  onChange={this.updateOutputDir}
              />
            </p>
          </div>

          <div className='section centre-content'>
            <div className='field'>
              <p className='control'>
                <button 
                    onClick={this.handleParse} 
                    className={this.props.fileProccessing || this.props.rdiProcessing ? 'button is-primary is-large is-loading' : 'button is-primary is-large'}>Parse!
                </button>
              </p>
            </div>

            
          </div>

        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    fileProccessing: state.files.loading,
    rdiProcessing: state.rdis.loading
  };
}

function mapDispatchToProps (dispatch) {
  return {
    addFile: (file) => {
      dispatch(addFile(file));
    },
    addRdi: (rdi) => {
      dispatch(addRdi(rdi));
    }
  };
}

AddDataPage.propTypes = {
  fileProccessing: PropTypes.bool,
  rdiProcessing: PropTypes.bool,
  addFile: PropTypes.func,
  addRdi: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDataPage);