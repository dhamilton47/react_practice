import React, { Component } from 'react';

class CalculatorKey extends Component {
	render() {
		return (
			<button
				type="button"
				className={this.props.styling}
				onClick={this.props.onClick}
			>
				{this.props.value}
			</button>
		);
	}
}

export default CalculatorKey;