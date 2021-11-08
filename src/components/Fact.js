import React from 'react';



const Fact = ({starWarsShip, puppy}) => {
	
	return (
		<div className='tc bg-gold dib br3 pa10 ma12 grow bw12 shadow-15'>
			<div>
				<h3>{starWarsShip}</h3>
			</div>
			<img alt='pups want to meet you!' src={puppy}/>
				<h6>({puppy})</h6>
		</div>
	);
}

export default Fact