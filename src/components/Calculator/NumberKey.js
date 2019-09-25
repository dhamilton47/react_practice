import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

NumberKey.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default NumberKey;