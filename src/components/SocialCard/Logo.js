import React from 'react';
import PropTypes from 'prop-types';
import './SocialCard.css';

export const Logo = props => {
	return (
		<div className={props.location}>
			<div className="logo">
				<img src={props.logo.src} alt={props.logo.alt} width="100"/>
			</div>
		</div>
	);
};

Logo.propTypes = {
	location: PropTypes.string,
	logo: PropTypes.shape({
		src: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired
	})
};
