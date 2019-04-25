import React, { Component } from 'react';
import { settings, results } from './DataForSettings';


class PageBack extends Component {
	handleClick() {
//		ng-click="prevPage()"
	}

	render() {
		let button = null;
		if (settings.page !== 0) {
			button = (
				<li>
					<button
						onClick={this.handleClick}
					>
						<i className="icon-rewind"/>
					</button>
				</li>
			)
		}

		return (
			button
		);
	}
}

class PageForward extends Component {
	handleClick() {
//		ng-click="nextPage()"
	}

	render() {
		let button = null;
		if (settings.page < results.nbPages) {
			button = (
				<li>
					<button
						onClick={this.handleClick}
					>
						<i className="icon-fast-forward"/>
					</button>
				</li>
			)
		}
		return (
			button
		);
	}
}

class PageElipsis extends Component {
	render() {
		return (
			<li>
				<button>
					<i className="icon-rewind"/>
				</button>
			</li>
		);
	}
}

class PageNumber extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
//		ng-click="toPage(n)"
	}

	static isActive(value) {
		if (value === settings.page) return "active";
	}
/*
	<button disabled="" ng-show="n === &quot;...&quot;" className="ng-hide">
	<i className="icon-ellipsis"></i>
	</button>
*/
	render() {
		return (
			<li
				className={PageNumber.isActive(this.props.page)}
			>
				<button>{this.props.page}</button>
			</li>
		);
	}
}

class PaginationContainer extends Component {
	render() {
		let hasPagination = null;
		let pageArray = [];

		if (results && results.nbPages > 1) {
			for (let i = 1; i <= results.nbPages; i += 1){
				pageArray.push(i);
			}

			hasPagination =  (
				<div className="pagination-container">
					<ul className="search-pagination">
						<PageBack/>
						{pageArray.map(number => <PageNumber key={number} page={number}/>)}
						<PageForward/>
					</ul>
				</div>
			);
		}

		return (
			hasPagination
		)
	}
}

export default PaginationContainer;