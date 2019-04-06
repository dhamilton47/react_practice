import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SocialCard.css';

class SiteLink extends Component {
	render() {
		return (
			<div className={this.props.location}>
				dev.to
			</div>
		);
	}
}

SiteLink.propTypes = {
	className: PropTypes.string
};

export default SiteLink;