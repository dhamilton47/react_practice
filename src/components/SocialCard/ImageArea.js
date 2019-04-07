import React, { Component } from 'react';
import "./SocialCard.css";
import Avatar from "./Avatar";
import Logo from "./Logo";
import Title from "./Title";

class ImageArea extends Component {
	render() {
		return (
			<div className={'top card'} style={{backgroundColor: 'orange'}}>
				<Logo location={'item1'}/>
				<Title size={30} location={'item2'} color={'white'} pad={30}/>
				<Avatar location={'item3'} color={'orange'} weight={'bold'}/>
			</div>
		)
	}
}

export default ImageArea;