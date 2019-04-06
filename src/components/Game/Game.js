import React, {Component} from 'react';
import './Game.css';
import Frames from "../Frames/Frames";
import Bowler from "../Bowler/Bowler";

class Game extends Component {
	render() {
		return (
			<div className="game-container">
				<Bowler player={this.props.player}/>
				<Frames
					gameID={this.props.gameID}
					frame={1}
				/>
				<Frames
					gameID={this.props.gameID}
					frame={2}
				/>
				<Frames
					gameID={this.props.gameID}
					frame={3}
				/>
				<Frames
					gameID={this.props.gameID}
					frame={4}
				/>
				<Frames
					gameID={this.props.gameID}
					frame={5}
				/>
				<Frames
					gameID={this.props.gameID}
					frame={6}
				/>
				<Frames
					gameID={this.props.gameID}
					frame={7}
				/>
				<Frames
					gameID={this.props.gameID}
					frame={8}
				/>
				<Frames
					gameID={this.props.gameID}
					frame={9}
				/>
				<Frames
					gameID={this.props.gameID}
					frame={10}
				/>
				<Frames
					gameID={this.props.gameID}
					frame={11}
				/>
			</div>
		);
	}
}

export default Game;