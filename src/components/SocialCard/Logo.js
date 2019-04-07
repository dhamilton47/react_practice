import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SocialCard.css';

class Logo extends Component {
	render() {
		return (
			<div className={this.props.location}>
				<div className={'logo'}>
					<img src={this.props.imgLogo} alt={this.props.altImgLogo} width="100"/>
				</div>
			</div>
		);
	}
}

Logo.propTypes = {
	location: PropTypes.string,
	imgLogo: PropTypes.string,
	altImgLogo: PropTypes.string
};

export default Logo;