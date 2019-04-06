import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SocialCard.css';

class Logo extends Component {
	render() {
		return (
			<div className={this.props.location} style={{textAlign: 'left'}}>
				<img src={"../../images/TSK_Solutions_Logo"} alt="TSK Solutions Logo" width="100"/>
			</div>
		);
	}
}

Logo.propTypes = {
	className: PropTypes.string
};

export default Logo;