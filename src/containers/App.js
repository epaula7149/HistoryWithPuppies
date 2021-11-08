import React, {Component} from 'react';
import FactList from '../components/FactList';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import swapiModule from '../components/swapiModule';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
				yearRequested: 9,
				factOfHistory: 'Jedi Temple of Records...enter',
				puppy: {
					message : 'https://media1.picsearch.com/is?MSUQjj1ifFWVg5r-CbQAh8pofi3rpn_akE6DH-tw67g&height=224'
				}
		}
	}

	onSearchChange = (event) => {
		this.setState({ yearRequested: event.target.value })
	}

	onButtonSubmit = () => {
		
		//start with the seed number and increment until next ship found
		let I = this.state.yearRequested;

		
		// start with the chosen ship number increment until a ship found
		// after 75 start over with 0

			var fact = swapiModule.getStarship(I)
			.then(user => {
				return user;
				} );

			//determine if a ship was found
			fact.then(obj => { if(obj.detail !== 'Not found') {
								//build the ship details
								fact.then(obj => {
									this.setState({factOfHistory: 
									'The ' + obj.name + ' *class=' + 
									obj.starship_class +
									'* (' + obj.model + 
									') was manufactured by: ' + obj.manufacturer })
									} );
									
									} //end ship found
									else {
										this.setState({factOfHistory: 
											'There are a ton of ships in Star Wars ' +
											'--- try again (2-75) --- ' + 
											'BUT, HAVE A PUPPY!' });
									}
							} )
		
		// get the puppy
		fetch('https://dog.ceo/api/breeds/image/random', {cache: "reload"})
		.then(response => response.json())
		.then(users => this.setState({puppy: users}));
	}	

	render() {
		const {factOfHistory, yearRequested, puppy} = this.state;

		return (!factOfHistory === '') ?
			<h1>Loading from EPA  A P I...</h1> :
			(
				<div className='tc'>
					<p1>
						<h1>STAR WARS Ships (with Puppies!)</h1>
					</p1>
					<ImageLinkForm 
						onSearchChange={this.onSearchChange}
						onButtonSubmit={this.onButtonSubmit}
					/>
					<Scroll>
						<ErrorBoundary>
							<FactList yearRequested={yearRequested} factOfHistory={factOfHistory} puppy={puppy}/>
						</ErrorBoundary>
					</Scroll>
				</div>			
			);
			
	}
}

export default App;