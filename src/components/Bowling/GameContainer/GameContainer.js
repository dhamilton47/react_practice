import React, {Component} from 'react';
import Game from "../Game/Game";

class GameContainer extends Component {
	render() {
		return (
			<div className="game">
				Game Panel
				<Game
					gameID={1}
					player={this.props.players[0]}
				/>
				<Game
					gameID={2}
					player={this.props.players[1]}
				/>
				<Game
					gameID={3}
					player={this.props.players[2]}
				/>
			</div>
		);
	}
}

export default GameContainer;