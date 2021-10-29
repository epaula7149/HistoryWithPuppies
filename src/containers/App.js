import React, {Component} from 'react';
import FactList from '../components/FactList';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
				yearRequested: 0,
				factOfHistory: 'empty',
				puppy: {
					message : 'https://media1.picsearch.com/is?MSUQjj1ifFWVg5r-CbQAh8pofi3rpn_akE6DH-tw67g&height=224'
				}
		}
	}

	onSearchChange = (event) => {
		this.setState({ yearRequested: event.target.value })
	}

	onButtonSubmit = () => {
		fetch('http://numbersapi.com/' + this.state.yearRequested + '/year?json', {cache: "reload"})
		.then(response=> response.json())
		.then(users => this.setState({factOfHistory: users}));

		fetch('https://dog.ceo/api/breeds/image/random', {cache: "reload"})
		.then(response=> response.json())
		.then(users => this.setState({puppy: users}));
	}

	render() {
		const {factOfHistory, yearRequested, puppy} = this.state;

		return (!factOfHistory === 'empty') ?
			<h1>Loading from EPA  A P I...</h1> :
			(
				<div className='tc'>
					<h1 className='f1' color='white' >THE YEAR IN HISTORY</h1>
					<h2 className='f1'>(with Puppies!)</h2>
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