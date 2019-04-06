import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SocialCard.css';

class Avatar extends Component {
	render() {
		return (
			<div className={this.props.location} style={{textAlign: 'right', backgroundColor: 'white'}}>
				Dan J. Hamilton
			</div>
		);
	}
}

Avatar.propTypes = {
	className: PropTypes.string
};

export default Avatar;