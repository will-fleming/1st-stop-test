import React from 'react';

const AddDataPage = () => {
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
};

export default AddDataPage;