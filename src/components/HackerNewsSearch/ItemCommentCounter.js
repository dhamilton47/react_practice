import React, {Component} from "react";
import * as PropTypes from "prop-types";

export class ItemCommentCounter extends Component {
	render() {
		return (
			<li>
				<a
					className={'item-nav-comment-counter'}
					href={this.props.story.hnLink}
					title="See original post on HN"
				>
					{this.props.story.numberOfComments} comments
				</a>
			</li>)
		;
	}
}

ItemCommentCounter.propTypes = {story: PropTypes.any};