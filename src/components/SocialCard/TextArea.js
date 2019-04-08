import React from 'react';
import PropTypes from 'prop-types';
import "./SocialCard.css";
import { SiteLink } from './SiteLink';
import { Blurb } from './Blurb';
import { Title } from './Title';

export  const TextArea = props => {
	return (
		<div className={props.layoutInner + ' card'}>
			<div className="item1">
				<Title appearance={'title-sm'} title={props.title} />
			</div>
			<div className="item2">
				<Blurb text={props.blurbText} />
			</div>
			<div className="item3">
				<SiteLink site={props.siteLink} />
			</div>
		</div>
	);
};

TextArea.propTypes = {
	layoutInner: PropTypes.string,
	title: PropTypes.string,
	blurbText: PropTypes.string,
	siteLink: PropTypes.string
};