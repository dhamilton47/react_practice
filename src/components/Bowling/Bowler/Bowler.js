import React, {Component} from 'react';
import './Bowler.css';

class Bowler extends Component {
	render() {
		return (
			<div className="bowler-slot">

					{this.props.player ? this.props.player : "Bowler's name"}

			</div>
		);
	}
}

export default Bowler;