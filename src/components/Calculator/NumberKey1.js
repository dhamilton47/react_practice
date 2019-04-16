import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NumberKey1 extends Component {
	render() {
		return (
			<button
				className={this.props.styling}
				onSubmit={this.props.onClick}
			>
				{this.props.value}
			</button>
		);
	}
}

NumberKey1.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default NumberKey1;