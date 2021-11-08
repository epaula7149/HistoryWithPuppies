import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onSearchChange, onButtonSubmit }) => {
  return (
      <div className='center'>
        <div className='form center pa14 br3 shadow-5'>
          <input 
            className='pa14 ba b--red bg-white'
            type='text' 
            placeholder='<--- TRY ## (2-75) --->' 
            onChange={onSearchChange}
          />
          <div className='center'>
            <button
              className='w-28 grow f4 link ph3 pv2 dib white bg-light-purple'
              onClick={onButtonSubmit}
            >FORCE CLICK HERE<
            /button>
          </div>

        </div>
      </div>
  );
}

export default ImageLinkForm;