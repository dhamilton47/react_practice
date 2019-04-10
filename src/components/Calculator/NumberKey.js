import React, { Component } from 'react';

class NumberKey extends Component {
	render() {
		return (
			<button
				className={this.props.styling}
			>
				{this.props.value}
			</button>
		);
	}
}

export default NumberKey;