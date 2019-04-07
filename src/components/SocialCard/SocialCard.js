import React, { Component } from 'react';
import ImageArea from './ImageArea'
import TextArea from "./TextArea";
import './SocialCard.css';

class SocialCard extends Component {
	render() {
		return (
			<div className={'social-card-tb'}>
				<ImageArea/>
				<TextArea/>
			</div>
		)

	}
}

export default SocialCard;