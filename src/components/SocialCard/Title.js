import React from 'react';
import PropTypes from 'prop-types';
import './SocialCard.css';

export const Title = props =>{
	return (
		<div className={props.appearance}>
			{props.title}
		</div>
	);
};

Title.propTypes = {
	appearance: PropTypes.string,
	title: PropTypes.string
};
