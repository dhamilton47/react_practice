import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SocialCard.css';

class Title extends Component{
	render() {
		return (
			<div className={this.props.location} style={{fontSize: this.props.size, fontWeight: "bold"}}>
				Learning React? Start Small.
			</div>
		);
	}
}

Title.propTypes = {
	className: PropTypes.string,
	size: PropTypes.number
};

export default Title;