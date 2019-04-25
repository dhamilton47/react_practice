import React, {Component} from "react";
import * as PropTypes from "prop-types";

export class ItemAuthor extends Component {
	render() {
		return (
			<li>
				<a
					className={'item-nav-author'}
					href={`https://news.ycombinator.com/user?id=${this.props.story.author}`}
					title={'See ' + this.props.story.author + ' profile'}
				>
					{this.props.story.author}
				</a>
			</li>
		);
	}
}

ItemAuthor.propTypes = {story: PropTypes.any};