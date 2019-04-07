import React, {Component} from 'react';
import './Ball.css';

// Ball is a class w/ state/props?

// this.state = {
//      game: #,
//      frame: #,
//      position: 1, 2, or 3
//  }

class Ball extends Component {

	render() {

		return (
			<button
				className="btn-ball"
				style={{gridArea: this.props.location3}}
				type="button"
				disabled="disabled">
				{this.props.gameID}
			</button>
		);
	}
}

export default Ball;