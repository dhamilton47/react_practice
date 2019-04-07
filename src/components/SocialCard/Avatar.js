import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SocialCard.css';
import djh from '../../../src/images/djh.jpeg'

class Avatar extends Component {
	render() {
		return (
			<div className={this.props.location}>
				<span className={'image-container'}	>
					<span className={'avatar-name'}>Dan J. Hamilton</span>
					<img src={djh} alt={'DJH'}/>
				</span>
			</div>
		);
	}
}

Avatar.propTypes = {
	className: PropTypes.string
};

export default Avatar;