import React from 'react';
import PropTypes from 'prop-types';
import './SocialCard.css';

export const Avatar = props => {
	return (
		<div className={props.location}>
			<div className="avatar-container"	>
				<div style={{padding: '4px', backgroundColor: 'white'}}>
					<span className="avatar-name">{props.picture.alt}</span>
					<img src={props.picture.src} alt={props.picture.alt}/>
				</div>
			</div>
		</div>
	);
};

Avatar.propTypes = {
	location: PropTypes.string,
	picture: PropTypes.shape({
		src: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired
	})
};
