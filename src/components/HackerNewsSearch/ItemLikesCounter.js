import React, {Component} from "react";
import * as PropTypes from "prop-types";

export class ItemLikesCounter extends Component {
	render() {
		return (
			<li>
				<i className="icon-heart"></i>
				<a
					className=""
				    title="See original post on HN"
					href={this.props.story.hnLink}
				>
					<span className="date ng-binding">{this.props.story.likes} points</span>
				</a>
			</li>
		);
	}
}

ItemLikesCounter.propTypes = {story: PropTypes.any};