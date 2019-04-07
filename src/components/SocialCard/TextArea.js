import React, { Component } from 'react';
import "./SocialCard.css";
import SiteLink from './SiteLink';
import Blurb from './Blurb';
import Title from './Title';

class TextArea extends Component {
	render() {
		return (
			<div className={'bottom card'}>
				<Title size={18} location={'item1'} color={'black'} pad={5}/>
				<Blurb location={'item2'}/>
				<SiteLink location={'item3'}/>
			</div>
		)
	}
}

export default TextArea;