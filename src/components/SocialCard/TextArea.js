import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./SocialCard.css";
import { SiteLink } from './SiteLink';
import { Blurb } from './Blurb';
import { Title } from './Title';

class TextArea extends Component {
	render() {
		return (
			<div className={this.props.layoutInner + ' card'}>
				<Title
					location={'item1'}
					appearance={'title-sm'}
					title={this.props.title}
				/>
				<Blurb
					location={'item2'}
					text={this.props.blurbText}
				/>
				<SiteLink
					location={'item3'}
					site={this.props.siteLink}
				/>
			</div>
		)
	}
}

TextArea.propTypes = {
	layoutInner: PropTypes.string,
	title: PropTypes.string,
	blurbText: PropTypes.string,
	siteLink: PropTypes.string
};

export default TextArea;