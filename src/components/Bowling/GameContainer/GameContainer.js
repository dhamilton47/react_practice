import React, {Component} from 'react';
import Game from "../Game/Game";

class GameContainer extends Component {
	render() {
		return (
			<div className="game">
				Game Panel
				{this.props.roster.players.map(player => <Game key={player} gameId={player} player={player}/>)}
			</div>
		);
	}
}

export default GameContainer;