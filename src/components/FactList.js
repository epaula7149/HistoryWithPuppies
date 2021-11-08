import React from 'react';
import Fact from './Fact';

const FactList = ({factOfHistory, puppy}) => { 
	
	return (
		<div>
				<Fact 
					starWarsShip={factOfHistory} 
					puppy={puppy.message}
				/>
		</div>
	);
}

export default FactList;