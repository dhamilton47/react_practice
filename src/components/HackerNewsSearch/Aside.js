import React, { Component } from 'react';

<!-- ngInclude: "_sidebar.html" -->
class Aside extends Component {
	render() {
		return (
			<div ng-include="&quot;_sidebar.html&quot;" className="ng-scope">
				<aside className="sidebar ng-scope">
					<ul>
						<li>
							<a active-link="" href="/" ng-click="gotoMenu($event, &quot;/&quot;)" className="active">
								<i className="icon-news"></i>
								All
							</a>
						</li>
						<li>
							<a active-link="" href="/hot" ng-click="gotoMenu($event, &quot;/hot&quot;)">
								<i className="icon-fire"></i>
								Hot
							</a>
						</li>
						<li>
							<a active-link="" href="/show-hn" ng-click="gotoMenu($event, &quot;/show-hn&quot;)">
								<i className="icon-megaphone"></i>
								Show HN
							</a>
						</li>
						<li>
							<a active-link="" href="/ask-hn" ng-click="gotoMenu($event, &quot;/ask-hn&quot;)">
								<i className="icon-bubble"></i>
								Ask HN
							</a>
						</li>
						<li>
							<a active-link="" href="/polls" ng-click="gotoMenu($event, &quot;/polls&quot;)">
								<i className="icon-bulb"></i>
								Polls
							</a>
						</li>
						<li>
							<a active-link="" href="/jobs" ng-click="gotoMenu($event, &quot;/jobs&quot;)">
								<i className="icon-banknote"></i>
								Jobs
							</a>
						</li>
						<li className="divider"></li>
						<!-- ngIf: settings.login -->
						<li>
							<a active-link="" href="/starred" ng-click="gotoMenu($event, &quot;/starred&quot;)">
								<i className="icon-star"></i>
								Starred
							</a>
						</li>
					</ul>
				</aside>
				<div className="sliding-menu-fade-screen ng-scope" ng-click="toggleNav()"></div>
			</div>
		)
	}
}

export default Aside;

