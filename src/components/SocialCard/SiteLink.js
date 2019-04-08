import React from 'react';
import PropTypes from 'prop-types';
import './SocialCard.css';

export const SiteLink = props => {
	return (
		<p style={{color: 'darkgray'}}>
			{props.site}
		</p>
	);
};

SiteLink.propTypes = {
	site: PropTypes.string
};
