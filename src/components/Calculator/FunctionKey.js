import React, { Component } from 'react';

class FunctionKey extends Component {
	render() {
		return (
			<button
				className={this.props.styling}
			>
				{this.props.function}
			</button>
		);
	}
}

export default FunctionKey;