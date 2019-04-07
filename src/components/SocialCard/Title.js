import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SocialCard.css';

class Title extends Component{
	render() {
		return (
			<div className={this.props.location}>
				<div className={this.props.appearance}>
					{this.props.title}
				</div>
			</div>
		);
	}
}

Title.propTypes = {
	location: PropTypes.string,
	appearance: PropTypes.string,
	title: PropTypes.string
};

export default Title;