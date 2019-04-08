import React from 'react';
import PropTypes from 'prop-types';
import './SocialCard.css';

export const SiteLink = props => {
	return (
		<div className={props.location}>
			<p style={{color: 'darkgray'}}>
				{props.site}
			</p>
		</div>
	);
};

SiteLink.propTypes = {
	location: PropTypes.string,
	site: PropTypes.string
};
