import React, { Component } from 'react';
import ImageArea from './ImageArea'
import TextArea from "./TextArea";
import './SocialCard.css';
import logo from '../../images/TSKSolutionsLogo.bmp';
import picture from '../../../src/images/djh.jpeg'

const SocialCardData = {
	layoutOuter: 'social-card-tb',
	imgLogo: logo,
	altImgLogo: 'TSK Solutions Logo',
	picture: picture,
	altPicture: 'Dan J. Hamilton',
	title: 'Learning React? Start Small.',
	blurbText: 'Can\'t pry yourself away from the tutorials? The cure is to make tiny little experiment apps.',
	siteLink: 'dev.to'
};

class SocialCard extends Component {
	render() {
		return (
			<div className={SocialCardData.layoutOuter}>
				<ImageArea
					layoutInner={SocialCardData.layoutOuter === 'social-card-tb' ? 'top' : 'left'}
					imgLogo={SocialCardData.imgLogo}
					altImgLogo={SocialCardData.altImgLogo}
					title={SocialCardData.title}
					picture={SocialCardData.picture}
					altPicture={SocialCardData.altPicture}
				/>
				<TextArea
					layoutInner={SocialCardData.layoutOuter === 'social-card-tb' ? 'bottom' : 'right'}
					title={SocialCardData.title}
					blurbText={SocialCardData.blurbText}
					siteLink={SocialCardData.siteLink}
				/>
			</div>
		)

	}
}

export default SocialCard;