import React, {Component} from 'react';
import {ItemAuthor} from "./ItemAuthor";
import {ItemCommentCounter} from "./ItemCommentCounter";
import {ItemLikesCounter} from "./ItemLikesCounter";
import {ItemOriginLink} from "./ItemOriginLink";
import {ItemPostDate} from "./ItemPostDate";
import {ItemTitle} from "./ItemTitle";

class Item extends Component {
	render() {
		return (
			<div className="item">
				<div className="item-main">
					<div className="item-content-wrapper">
						<div className="item-title-and-infos">
							<ItemTitle story={this.props.story}/>
							<ul className="item-infos item-infos-ul list-inline">
								<ItemLikesCounter story={this.props.story}/>
								<ItemAuthor story={this.props.story}/>
								<ItemPostDate story={this.props.story}/>
								<ItemCommentCounter story={this.props.story}/>
								<ItemOriginLink story={this.props.story}/>
							</ul>
						</div>
					</div>
				</div>
			</div>

		)
	}
}

export default Item;