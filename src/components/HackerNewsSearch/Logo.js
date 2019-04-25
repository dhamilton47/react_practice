import React, { Component } from 'react';

class Logo extends Component {
	render() {
		return (
			<a
				className="logo"
				href="/?"
			>
				<img
					src={this.props.src}
					alt={this.props.alt}
					style={this.props.styling}
				/>
				<div className="logo-name">
					Search
					<br/>
					Hacker News
				</div>
			</a>
		);
	}
}

export default Logo;