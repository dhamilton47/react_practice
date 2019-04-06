import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SocialCard.css';

class TagLine extends Component {
	render() {
		return (
			<div className={this.props.location}>
				Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.
			</div>
		);
	}
}

TagLine.propTypes = {
	className: PropTypes.string
};

export default TagLine;