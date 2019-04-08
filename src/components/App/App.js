import React, { Component } from 'react';
import './App.css';

import {GameScoringContainer} from '../Bowling/GameScoringContainer/GameScoringContainer';
import {MatchScoringContainer} from '../Bowling/MatchScoringContainer/MatchScoringContainer';
import GameContainer from "../Bowling/GameContainer/GameContainer";
import {StatsContainer} from "../Bowling/StatsContainer/StatsContainer";
import {Settings} from "../Bowling/Settings/Settings";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contestID: 0,
			contestOpponents: [],
			contestSides: [],
			contestFormat: {linage: 0, baker: 0},
//			contestFormat: {linage: 1, baker: 0},
			contestLocation: [],
			contestDate: [],
			gameID: [],
			players: []
//			players: ['TJ','Sam', 'Kim']
		};
	}

	render() {
		return (
			<div className="App">
				<h1 className="item1">Bowling Testing Page</h1>
				<div className="navigation">NavBar</div>
				<Settings/>
				<GameContainer
					contestID={this.state.contestID}
					contestOpponents={this.state.contestOpponents}
					contestSides={this.state.contestSides}
					contestFormat={this.state.contestFormat}
					gameID={this.state.gameID}
					players={this.state.players}
				/>
				<GameScoringContainer/>
				<MatchScoringContainer/>
				<StatsContainer/>
				<div className="item2">Footer</div>
			</div>
		);
	}
}

export default App;
