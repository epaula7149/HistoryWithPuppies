import React from 'react';

let puppycaption = 'if you enter this Hall of Knowledge... ([DISCOVER] waiting on you...)';

const Fact = ({yearRequested, text, puppy}) => {
	if (!text) {
		text = 'History can learn new tricks!';
	} else {
		puppycaption ='BUT...ANYWAY... Look da Puppy !'
	}	
		
	return (
		<div className='tc bg-gold dib br3 pa10 ma12 grow bw12 shadow-15'>
			<div>
				<h3>{text}</h3>
				<h4>{puppycaption}</h4>
			</div>
			<img alt='pups want to meet you!' src={puppy}/>
				<h6>({puppy})</h6>
		</div>
	);
}

export default Fact