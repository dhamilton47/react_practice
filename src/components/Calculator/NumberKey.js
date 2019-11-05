import React, { Component } from 'react';

class NumberKey extends Component {
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

export default NumberKey;