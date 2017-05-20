import React, {Component} from 'react';

class AddDataPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      inputDir: '',
      outputDir: ''
    };
    this.updateInputDir = this.updateInputDir.bind(this);
    this.updateOutputDir = this.updateOutputDir.bind(this);
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
                <button className='button is-primary is-large'>Parse!</button>
              </p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default AddDataPage;