import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SocialCard.css';

class Blurb extends Component {
	render() {
		return (
			<div className={this.props.location}>
				Can't pry yourself away from the tutorials? The cure is to make tiny little experiment apps.
			</div>
		);
	}
}

Blurb.propTypes = {
	className: PropTypes.string
};

export default Blurb;