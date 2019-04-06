import React, {Component} from 'react';
import './Frames.css';
import Ball from "../Ball/Ball";
import GameTotal from "../GameTotal/GameTotal";

class Frames extends Component {
	render() {
		const divStyle = {gridColumn: (this.props.frame + 2) + ' / span 1'};
		return (
			<div className="frames-container" style={divStyle}>
				<Ball
					gameID={this.props.gameID}
					frames={this.props.frame}
					location={"left"}
					position={0}
					value={2}
				/>

				<Ball
					gameID={this.props.gameID}
					frames={this.props.frame}
					location={"middle"}
					position={1}
					value={3}
				/>

				<Ball
					gameID={this.props.gameID}
					frames={this.props.frame}
					location={"right"}
					position={2}
					value={null}
				/>

				<div className="score-block">
					<GameTotal/>
				</div>
			</div>
		);
	}
}

export default Frames;