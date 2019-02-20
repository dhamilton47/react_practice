import React, {Component} from 'react';
import './Ball.css';

// Ball will a class w/state

// this.state = {
//      game: #,
//      frame: #,
//      position: 1, 2, or 3
//  }

export class Ball extends Component {
	render() {
		return (
			<button className="btn-ball" type="button" disabled="disabled">X</button>
		);
	}
}