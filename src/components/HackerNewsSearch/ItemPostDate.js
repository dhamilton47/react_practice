import React, {Component} from "react";
import * as PropTypes from "prop-types";

export class ItemPostDate extends Component {
	render() {
		return (
			<li>
				<a
					className={'item-nav-post-date'}
					href={this.props.story.hnLink}
					title={this.props.story.posted}
				>
					{this.props.story.posted} years ago
				</a>
			</li>
		);
	}
}

ItemPostDate.propTypes = {story: PropTypes.any};