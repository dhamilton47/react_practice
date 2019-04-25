import React, {Component} from "react";
import Item from "./Item";

const story = {
	title: 'Stephen Hawking has died',
	likes: 6051,
	author: 'Cogito',
	posted: "2016-10-02",
	numberOfComments: 3,
	hnLink: 'https://news.ycombinator.com/item?id=16582136',
	originLink: 'http://www.bbc.com/news/uk-43396008'
};

export class Items extends Component {
// ngRepeat: hit in results.hits
	render() {
		return (
			<section className="main-content">
				<section className="search-results">

					<ul>
						<li>
							<Item story={story}/>
						</li>
					</ul>
				</section>

			</section>

		);
	}
}