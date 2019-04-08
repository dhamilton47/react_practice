import React from 'react';
import PropTypes from 'prop-types';
import './SocialCard.css';

export const Blurb = props => {
	return (
		<p>
			{props.text}
		</p>
	);
};

Blurb.propTypes = {
	text: PropTypes.string
};
