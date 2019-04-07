import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SocialCard.css';

class Blurb extends Component {

	render() {
		return (
			<div className={this.props.location}>
				<p>
					{this.props.text}
				</p>
			</div>
		);
	}
}

Blurb.propTypes = {
	location: PropTypes.string,
	text: PropTypes.string
};

export default Blurb;