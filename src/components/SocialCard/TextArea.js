import React from 'react';
import PropTypes from 'prop-types';
import "./SocialCard.css";
import { SiteLink } from './SiteLink';
import { Blurb } from './Blurb';
import { Title } from './Title';

export  const TextArea = props => {

		return (
			<div className={props.layoutInner + ' card'}>
				<Title
					location={'item1'}
					appearance={'title-sm'}
					title={props.title}
				/>
				<Blurb
					location={'item2'}
					text={props.blurbText}
				/>
				<SiteLink
					location={'item3'}
					site={props.siteLink}
				/>
			</div>
		);

};

TextArea.propTypes = {
	layoutInner: PropTypes.string,
	title: PropTypes.string,
	blurbText: PropTypes.string,
	siteLink: PropTypes.string
};