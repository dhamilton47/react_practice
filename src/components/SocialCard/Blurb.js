import React from 'react';
import PropTypes from 'prop-types';
import './SocialCard.css';

export const Blurb = props => {
	return (
		<div className={props.location}>
			<p>
				{props.text}
			</p>
		</div>
	);
};

Blurb.propTypes = {
	location: PropTypes.string,
	text: PropTypes.string
};
