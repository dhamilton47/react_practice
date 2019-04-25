import React, { Component } from 'react';
import {hit, settings, state} from './DataForSettings';

class Item1 extends Component {
	render() {
		return (
			<div
				bindonce=""
				class="item ng-scope item_16582136"
				ng-class="&quot;item_&quot; + hit.objectID + (story[hit.objectID] ? &quot; item-show-comments&quot; : &quot;&quot;)"
				ng-click="clickHit(hit.objectID, $index + 1)"
				ng-repeat="hit in results.hits"
			>
				<div class="item-main">
					<div class="item-content-wrapper">
						{
							(settings.showThumbnails && settings.style !== "default" && hit._tags[0] === "story" && state !== "ask-hn" && state !== "polls") ??
							<div className="item-title-and-infos">
								<h2>
									<a
										bo-href="hit.url || ('https://news.ycombinator.com/item?id=' + hit.objectID)"
										bo-html="hit._highlightResult.title.value"
										bo-show="hit._tags[0] === 'story' || hit._tags[0] === 'poll' || hit._tags[0] === 'job'"
										ng-click="gotoHit(hit.objectID)" href="http://www.bbc.com/news/uk-43396008"
									>
										Stephen Hawking has died
									</a>
									<!-- boIf: hit._tags[0] === 'comment' -->
								</h2>
								<ul className="item-infos list-inline">
									<li bo-show="hit.points">
										<i className="icon-heart"></i>
										<a
											bo-href="&quot;https://news.ycombinator.com/item?id=&quot; + hit.objectID"
											title="See original post on HN"
											href="https://news.ycombinator.com/item?id=16582136"
										>
											<span className="date ng-binding">6015 points</span>
										</a>
									</li>
									<li>
										<i className="icon-head"></i>
										<a
											bo-href="&quot;https://news.ycombinator.com/user?id=&quot; + hit.author"
											title="See Cogito&nbsp;profile"
											href="https://news.ycombinator.com/user?id=Cogito"
										>
											<span bo-html="hit._highlightResult.author.value"
											      className="author">Cogito</span>
										</a>
									</li>
									<li>
										<i className="icon-clock"></i>
										<a
											bo-href="&quot;https://news.ycombinator.com/item?id=&quot; + (hit._tags[0] === &quot;comment&quot; ? hit.story_id + &quot;#&quot; + hit.objectID : hit.objectID)"
											title="2018-03-14T03:50:30.000Z"
											href="https://news.ycombinator.com/item?id=16582136"
										>
											<span className="date ng-binding">a year ago</span>
										</a>
									</li>
									<li bo-show="settings.style === &quot;default&quot;">
										<i className="icon-speech-bubble"></i>
										<a
											bo-href="&quot;https://news.ycombinator.com/item?id=&quot; + hit.objectID"
											title="See original post on HN"
											href="https://news.ycombinator.com/item?id=16582136"
										>
											<span className="comments ng-binding">436 comment<span
												bo-show="hit.num_comments != 1">s</span></span>
										</a>
									</li>
									<li bo-show="hit.url">
										<a
											bo-href="hit.url"
											bo-html="hit._highlightResult.url.value | domain"
											className="hit-link"
											href="http://www.bbc.com/news/uk-43396008"
										>
											(http://www.bbc.com/news/uk-43396008)
										</a>
									</li>
								</ul>
							</div>
						}
						<!-- boIf: settings.showThumbnails && settings.style !== "default" && hit._tags[0] === "story" && state !== "ask-hn" && state !== "polls" -->
						<div
							bo-html="hit._highlightResult.comment_text.value|cleanup"
							bo-show="hit.comment_text &amp;&amp; hit._tags[0] === &quot;comment&quot;"
							class="text-container"
							style="display: none;"
						>
						</div>
						<div
							bo-html="hit._highlightResult.story_text.value|cleanup"
							bo-show="hit.story_text &amp;&amp; (hit._tags[0] === &quot;story&quot; || hit._tags[0] === &quot;job&quot;)"
							class="text-container"
							style="display: none;"
						>
						</div>
					</div>
					<div
						bo-show="hit._tags[0] === &quot;story&quot; || hit._tags[0] === &quot;poll&quot; || hit._tags[0] === &quot;job&quot;"
						class="item-actions"
					>
						<ul class="list-inline">
							<li bo-show="state != &quot;jobs&quot;" class="action-toggle-comments">
								<!-- %i.icon-speech-bubble -->
								<a
									bo-href="&quot;/story/&quot; + hit.objectID + &quot;/&quot; + friendly(hit.title)"
									bo-show="hit.num_comments > 0"
									class="comments-bubble ng-binding"
									ng-click="loadComments(hit.objectID, $event)"
									href="/story/16582136/stephen-hawking-has-died"
								>
									<!-- {{ ::hit.num_comments }} comment<span bo-show="hit.num_comments != 1">s</span> -->
									436
								</a>
								<!-- %span{'bo-show' => 'hit.num_comments == 0'} no comment -->
								<span
									bo-show="hit.num_comments == 0"
									class="comments-bubble no-comments"
									style="display: none;"
								>
													0
												</span>
							</li>
							<li class="action-share">
								<a class="placeholder">
									<i class="icon-share"></i>
								</a>
							</li>
							<li bo-show="state != &quot;jobs&quot;" class="action-toggle-star">
								<a
									href="#"
									ng-class="{ &quot;starred&quot;: isStarred(hit.objectID) }"
									ng-click="toggleStar($event, hit.objectID)"
								>
									<i class="icon-star"></i>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<!-- ngIf: story[hit.objectID] -->
				<div class="item-clearfix"></div>
			</div>
			<!-- end ngRepeat: hit in results.hits -->
		)
	}
}

export default Item1;