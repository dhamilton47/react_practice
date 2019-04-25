import React, {Component} from "react";
import * as PropTypes from "prop-types";

export class ItemOriginLink extends Component {
	render() {
		return (
			<li>
				<a
					className={'item-nav-origin-link'}
					href={this.props.story.originLink}
					title="Link to news item"
				>
					({this.props.story.originLink})
				</a>
			</li>
		);
	}
}

ItemOriginLink.propTypes = {story: PropTypes.any};