import React from 'react';
import Fact from './Fact';

const FactList = ({yearRequested, factOfHistory, puppy}) => { 

	return (
		<div>
				<Fact 
					year={yearRequested}
					text={factOfHistory.text} 
					puppy={puppy.message}
				/>
		</div>
	);
}

export default FactList;