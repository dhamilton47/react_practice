import React, { Component } from 'react';
import "./SocialCard.css";
import SiteLink from './SiteLink';
import TagLine from './TagLine';
import Title from './Title';

class TextArea extends Component {
	render() {
		return (
			<div className={'App right card'}>
				<Title size={18} location={'item1'}/>
				<TagLine location={'item2'}/>
				<SiteLink location={'item3'}/>
			</div>
		)
	}
}

export default TextArea;