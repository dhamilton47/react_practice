import React, { Component } from 'react';
import './Bowling.css';
import {Settings} from "./Settings/Settings";
import GameContainer from "./GameContainer/GameContainer";
import {GameScoringContainer} from "./GameScoringContainer/GameScoringContainer";
import {MatchScoringContainer} from "./MatchScoringContainer/MatchScoringContainer";
import {StatsContainer} from "./StatsContainer/StatsContainer";


class Bowling extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contest: {
				contestID: 0,
				contestOpponents: [],
				contestSides: [],
				contestFormat: {linage: 0, baker: 0},
				//contestFormat: {linage: 1, baker: 0},
				contestLocation: [],
				contestDate: [],
			},
			roster: {
				players: [
					{
						name: '',
						gameID: []
					}/*,
					{
						name: 'TJ',
						gameID: [1,2,3]
					},
					{
						name: 'Sam',
						gameID: [1,2,3]
					},
					{
						name: 'Kim',
						gameID: [1,2,3]
					}*/
				]
			}
		};
	}

	render() {
		return (

			<div className="App">
				<h1 className="item1">Bowling Testing Page</h1>
				<div className="navigation">NavBar</div>
				<Settings/>
				<GameContainer
					contest={this.state.contest}
					roster={this.state.roster}
				/>
				<GameScoringContainer/>
				<MatchScoringContainer/>
				<StatsContainer/>
				<div className="item2">Footer</div>
			</div>
		);
	}
}

export default Bowling;
