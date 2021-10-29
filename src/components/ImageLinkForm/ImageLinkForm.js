import React from 'react';
import './ImageLinkForm.css';
//import SearchBox from '../SearchBox';

const ImageLinkForm = ({ onSearchChange, onButtonSubmit }) => {
  return (
      <div className='center'>
        <div className='form center pa14 br3 shadow-5'>
          <input 
            className='pa14 ba b--red bg-white'
            type='text' 
            placeholder='<- enter 4-digit YEAR ->' 
            onChange={onSearchChange}
          />
          <div className='center'>
            <button
              className='w-28 grow f4 link ph3 pv2 dib white bg-light-purple'
              onClick={onButtonSubmit}
            >DISCOVER<
            /button>
          </div>

        </div>
      </div>
  );
}

export default ImageLinkForm;