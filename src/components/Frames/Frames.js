import React, {Component} from 'react';
import './Frames.css';
import {Ball} from "../Ball/Ball";
import {GameTotal} from "../GameTotal/GameTotal";

export class Frames extends Component {
	render() {
		const divStyle = {gridColumn: (this.props.frame + 2) + ' / span 1'};
		return (
			<div className="frames-container" style={divStyle}>
				<div className="left-slot" ><Ball position={0}/></div>
				<div className="middle-slot"><Ball position={1}/></div>
				<div className="right-slot" ><Ball position={2}/></div>
				<div className="score-block"><GameTotal/></div>
			</div>
		);
	}
}