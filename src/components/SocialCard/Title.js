import React from 'react';
import PropTypes from 'prop-types';
import './SocialCard.css';

export const Title = props =>{
	return (
		<div className={props.location}>
			<div className={props.appearance}>
				{props.title}
			</div>
		</div>
	);
};

Title.propTypes = {
	location: PropTypes.string,
	appearance: PropTypes.string,
	title: PropTypes.string
};
