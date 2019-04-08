import React, { Component } from 'react';
import ImageArea from './ImageArea'
import TextArea from "./TextArea";
import './SocialCard.css';
import tsk from '../../images/TSKSolutionsLogo.bmp';
import djh from '../../../src/images/djh.jpeg'

const SocialCardData = {
	layoutOuter: 'social-card-tb',
	logo: {
		src: tsk,
		alt: 'TSK Solutions Logo'
	},
	picture: {
		src: djh,
		alt: 'Dan J. Hamilton'
	},
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
					logo={SocialCardData.logo}
					title={SocialCardData.title}
					picture={SocialCardData.picture}
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