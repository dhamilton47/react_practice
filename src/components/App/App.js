import React, { Component } from 'react';
import './App.css';

import {Ball} from '../Ball/Ball';
import {ScoringContainer} from "../ScoringContainer/ScoringContainer";

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1 className="item1">Bowling Testing Page</h1>
				<div className="item2">NavBar</div>

				<div className="item3">
					Game Panel
					<Ball/>
				</div>
				<div className="item4">
					Scoring Panel
					<ScoringContainer/>
				</div>
				<div className="item5">Match Panel</div>
				<div className="item6">Stats Panel</div>
				<div className="item7">Footer</div>
			</div>
		);
	}
}

export default App;
