import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SocialCard.css';
import logo from '../../images/TSKSolutionsLogo.bmp';

class Logo extends Component {
	render() {
		return (
			<div className={this.props.location} style={{textAlign: 'left'}}>
				<img src={logo} alt="TSK Solutions Logo" width="100"/>
			</div>
		);
	}
}

Logo.propTypes = {
	className: PropTypes.string
};

export default Logo;