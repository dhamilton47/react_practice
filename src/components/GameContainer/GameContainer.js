import React, {Component} from 'react';
import {Game} from "../Game/Game";

export class GameContainer extends Component {
	render() {
		return (
			<div className="game">
				Game Panel
				<Game/>
				<Game/>
				<Game/>
				<Game/>
				<Game/>
				<Game/>
				<Game/>
				<Game/>
				<Game/>
				<Game/>
				<Game/>
				<Game/>
			</div>
		);
	}
}