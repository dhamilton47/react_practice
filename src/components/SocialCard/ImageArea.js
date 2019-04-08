import React from 'react';
import PropTypes from 'prop-types';
import "./SocialCard.css";
import { Avatar } from "./Avatar";
import { Logo } from "./Logo";
import { Title } from "./Title";

export const ImageArea = props => {
	return (
		<div className={props.layoutInner + ' card'} style={{backgroundColor: 'orange'}}>
			<Logo
				location={'item1'}
				logo={props.logo}
			/>
			<Title
				location={'item2'}
				appearance={'title-lg'}
				title={props.title}
			/>
			<Avatar
				location={'item3'}
				picture={props.picture}
			/>
		</div>
	);
};

ImageArea.propTypes = {
	layoutInner: PropTypes.string,
	logo: PropTypes.object,
	title: PropTypes.string,
	picture: PropTypes.object,
};
