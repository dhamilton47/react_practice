import React, { Component } from 'react';

class FunctionKey extends Component {
	render() {
		return (
			<button
				type="button"
				className={this.props.styling}
				onClick={this.props.onClick}
			>
				{this.props.function}
			</button>
		);
	}
}

export default FunctionKey;