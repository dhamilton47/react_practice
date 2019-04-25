import React, { Component } from 'react';
//import './HackerNewsSearch.css';
import './default.css';
import './experimental.css';
import FooterContainer from './FooterContainer';
import ItemContainer from './ItemContainer';
import SearchContainer from './SearchContainer';

class HackerNewsSearch extends Component {
	render() {
		return (
			<div className="container">
				<SearchContainer/>
				<ItemContainer/>
			</div>
		);

	}
}

export default HackerNewsSearch;