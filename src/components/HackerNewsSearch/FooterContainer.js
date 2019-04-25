import React, { Component } from 'react';
//import './Footer.css';

class FooterContainer extends Component {
	render() {
		return (
			<footer>
				<ul className="list-inline">
					<li>
						<a
							href={"/about"}
						>
							About
						</a>
					</li>
					<li>
						•
					</li>
					<li>
						<a
							href={"/settings"}
						>
							Settings
						</a>
					</li>
					<li>
						•
					</li>
					<li>
						<a
							href={"/help"}
						>
							Help
						</a>
					</li>
					<li>
						•
					</li>
					<li>
						<a
							href={"/api"}
						>
							API
						</a>
					</li>
					<li>
						•
					</li>
					<li>
						<a
							href={"https://news.ycombinator.com"}
						>
							Hacker News
						</a>
					</li>
					<li>
						•
					</li>
					<li>
						<a
							href={"https://github.com/algolia/hn-search"}
						>
							Fork/Contribute
						</a>
					</li>
					<li>
						•
					</li>
					<li>
						<a
							href={"https://status.algolia.com"}
						>
							Status
						</a>
					</li>
					<li>
						•
					</li>
					<li>
						<a
							href={"/cool_apps"}
						>
							Cool Apps
						</a>
					</li>
				</ul>
			</footer>
		);
	}
}

export default FooterContainer;