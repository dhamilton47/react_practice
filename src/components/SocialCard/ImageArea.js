import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./SocialCard.css";
import { Avatar } from "./Avatar";
import { Logo } from "./Logo";
import Title from "./Title";

class ImageArea extends Component {
	render() {
		return (
			<div className={this.props.layoutInner + ' card'} style={{backgroundColor: 'orange'}}>
				<Logo
					location={'item1'}
					logo={this.props.logo}
				/>
				<Title
					location={'item2'}
					appearance={'title-lg'}
					title={this.props.title}
				/>
				<Avatar
					location={'item3'}
					picture={this.props.picture}
				/>
			</div>
		)
	}
}

ImageArea.propTypes = {
	layoutInner: PropTypes.string,
	logo: PropTypes.object,
	title: PropTypes.string,
	picture: PropTypes.object,
};

export default ImageArea;