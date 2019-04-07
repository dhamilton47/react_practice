import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SocialCard.css';

class Avatar extends Component {
	render() {
		return (
			<div className={this.props.location}>
				<span className="image-container"	>
					<span className="avatar-name">{this.props.altPicture}</span>
					<img src={this.props.picture} alt={this.props.altPicture}/>
				</span>
			</div>
		);
	}
}

Avatar.propTypes = {
	location: PropTypes.string,
	picture: PropTypes.string,
	altPicture: PropTypes.string
};

export default Avatar;