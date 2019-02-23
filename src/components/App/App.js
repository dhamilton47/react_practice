import React, { Component } from 'react';
import './App.css';

import {GameScoringContainer} from '../GameScoringContainer/GameScoringContainer';
import {MatchScoringContainer} from '../MatchScoringContainer/MatchScoringContainer';
import {GameContainer} from "../GameContainer/GameContainer";
import {StatsContainer} from "../StatsContainer/StatsContainer";
import {Settings} from "../Settings/Settings";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contestID: 0,
			contestOpponents: [],
			contestSides: [],
			contestFormat: {linage: 0, baker: 0},
			contestLocation: [],
			contestDate: [],
			gameID: [],
			players: []
		};
	}

	render() {
		return (
			<div className="App">
				<h1 className="item1">Bowling Testing Page</h1>
				<div className="navigation">NavBar</div>
				<Settings/>
				<GameContainer/>
				<GameScoringContainer/>
				<MatchScoringContainer/>
				<StatsContainer/>
				<div className="item2">Footer</div>
			</div>
		);
	}
}

export default App;
