import React from 'react';

const SearchBox = ({ onSearchChange }) => {
	return (
		<div className='pa2 '>
			<input 
				className='pa13 ba b--red bg-red'
				type='text' 
				placeholder='< enter 4-digit YEAR >' 
				onChange={onSearchChange}
			/>
		</div>
	)
}

export default SearchBox;