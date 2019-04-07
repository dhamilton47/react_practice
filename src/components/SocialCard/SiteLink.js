import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SocialCard.css';

class SiteLink extends Component {
	render() {
		return (
			<div className={this.props.location}>
				<p style={{color: 'darkgray'}}>
					{this.props.site}
				</p>
			</div>
		);
	}
}

SiteLink.propTypes = {
	location: PropTypes.string,
	site: PropTypes.string
};

export default SiteLink;