import React, { Component } from 'react';
//import './Sort.css';

class SortContainer extends Component {
	render() {
		return (
			<header>
				<span className="filter-label">
					Search
				</span>
				<div className="type-dropdown wrap-dd-select">
					<span className="selected">
						Stories
					</span>
					<ul className="dropdown">
						<li className="dropdown-item">
							<a
								href=""
								className="dropdown-item"
								onClick={null}
							>
								All
							</a>
						</li>
						<li className="dropdown-item">
							<a
								href=""
								className="dropdown-item"
								onClick={null}
							>
								Stories
							</a>
						</li>
						<li className="dropdown-item">
							<a
								href=""
								className="dropdown-item"
								onClick={null}
							>
								Comments
							</a>
						</li>
					</ul>
				</div>
				<span className="filter-label">
					by
				</span>
				<div className="type-dropdown wrap-dd-select">
					<span className="selected">
						Popularity
					</span>
					<ul className="dropdown">
						<li className="dropdown-item">
							<a
								href=""
								className="dropdown-item"
								onClick={null}
							>
								Popularity
							</a>
						</li>
						<li className="dropdown-item">
							<a
								href=""
								className="dropdown-item"
								onClick={null}
							>
								Date
							</a>
						</li>
					</ul>
				</div>
				<span className="filter-label">
					for
				</span>
				<div className="type-dropdown wrap-dd-select">
					<span className="selected">
						All time
					</span>
					<ul className="dropdown">
						<li className="dropdown-item">
							<a
								href=""
								className="dropdown-item"
								onClick={null}
							>
								All time
							</a>
						</li>
						<li className="dropdown-item">
							<a
								href=""
								className="dropdown-item"
								onClick={null}
							>
								Last 24h
							</a>
						</li>
						<li className="dropdown-item">
							<a
								href=""
								className="dropdown-item"
								onClick={null}
							>
								Past Week
							</a>
						</li>
						<li className="dropdown-item">
							<a
								href=""
								className="dropdown-item"
								onClick={null}
							>
								Past Month
							</a>
						</li>
						<li className="dropdown-item">
							<a
								href=""
								className="dropdown-item"
								onClick={null}
							>
								Past Year
							</a>
						</li>
						<li className="dropdown-item">
							<a
								href=""
								className="dropdown-item"
								onClick={null}
							>
								Custom Range
							</a>
						</li>
					</ul>
				</div>
				<ul className="list-inline search-infos">
					<li># result(s) (0.00N seconds)</li>
					<li className="action-share">
						<a className="placeholder"></a>
						<div className="wrap-dd-menu">
							<a
								href="https://hn.algolia.com/?sort=byPopularity&prefix&page=0&dateRange=all&type=story&query="
								className="dropdown-share"
							>
								<i className="icon-share"></i>
							</a>
							<ul className="dropdown">
								<li className="dropdown-item">
									<a href="" className="dropdown-item">
										<i className="icon-twitter"></i>
										Share on Twitter
									</a>
								</li>
								<li className="dropdown-item">
									<a href="" className="dropdown-item">
										<i className="icon-facebook"></i>
										Share on Facebook
									</a>
								</li>
								<li className="dropdown-item">
									<a href="" className="dropdown-item">
										<i className="icon-envelope-o"></i>
										Share by Email
									</a>
								</li>
							</ul>
						</div>
					</li>
				</ul>
			</header>
		)
		/*
		return (
			<div className="sort-container">
				<span>
					Search
					{' '}
					<select/>
					{' '}
					by
					{' '}
					<select/>
					{' '}
					for
					{' '}
					<select/>
				</span>
				<span>search count </span>
				{' '}
				<span>share with</span>
			</div>
		)
		 */
	}
}

export default SortContainer;