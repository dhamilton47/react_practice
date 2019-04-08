import React from 'react';
import PropTypes from 'prop-types';
import './SocialCard.css';

export const Avatar = props => {
	return (
		<div className={props.location}>
			<span className="image-container"	>
				<span className="avatar-name">{props.picture.alt}</span>
				<img src={props.picture.src} alt={props.picture.alt}/>
			</span>
		</div>
	);
};

Avatar.propTypes = {
	location: PropTypes.string.isRequired,
	picture: PropTypes.shape({
		src: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired
	})
};
