import React, {Component} from "react";
import {hit, settings, state} from './DataForSettings';
import * as PropTypes from "prop-types";

export class ItemTitle extends Component {

	/* Unresolved Angular commands
		<a
			bo-href="{hit.url} || ('https://news.ycombinator.com/item?id=' + {hit.objectID})"
			bo-html="hit._highlightResult.title.value"
			bo-show="hit._tags[0] === 'story' || hit._tags[0] === 'poll' || hit._tags[0] === 'job'"
			ng-click="gotoHit(hit.objectID)"
		>
	 */
	render() {
		return (
				<a
					href={hit._highlightResult.url.value}
				>
					<h2>{hit._highlightResult.title.value}</h2>
				</a>
		);
	}
}

ItemTitle.propTypes = {story: PropTypes.any};