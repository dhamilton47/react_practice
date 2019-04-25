import React, { Component } from 'react';
import './Search.css';
import Logo from "./Logo";
import SearchInput from "./SearchInput";
import Toggle from "./Toggle";
import Algolia from '../../images/logo-algolia-white-full.svg'

class SearchContainer extends  Component {
	render() {
		return (
			<header className="page-header">
				<div className="logo-wrapper">
					<a
						href="/?"
					>
						<img
							className="logo-img"
							src="https://hn.algolia.com/assets/logo-hn-search.png"
							alt="Hacker News"
						/>
						<div className="logo-name">
							Search<br/>Hacker News
						</div>
					</a>
				</div>
				<div className="search-wrapper">
					<div className="item-input-wrapper">
						<i className="icon-search"/>
						<input
							type="search"
						    placeholder="Search stories by title, url or author"
							autoCapitalize={"off"}
							autoComplete={"off"}
							autoCorrect={"off"}
							autoFocus
							spellCheck={"false"}
						/>
					</div>
					<span className="powered-by">
						by
						<a
							href={"https://www.algolia.com/?utm_source=hn_search&utm_medium=link&utm_term=logo&utm_campaign=hn_algolia"}
							title={"Realtime Search Engine"}
						>
							<img
								src={Algolia}
								alt={"Algolia Logo White Full"}
							/>
						</a>
					</span>
				</div>
				<div className="nav-link-settings">
					<a
						href="/settings?"
					>
						<i className="icon-params"></i>
					</a>
				</div>
			</header>
		);
/*
		return <div className="search-container">
			<Logo
				styling={{width: "48px"}}
				src={'https://hn.algolia.com/assets/logo-hn-search.png'}
				alt={'Hacker News'}
			/>
			<SearchInput/>
			<span>by</span>
			<Logo
				styling={{width: "60px", height: "15px"}}
				src={Algolia}
				alt={'Algolia'}
			/>
			<Toggle/>
		</div>;
		*/

	}
}

export default SearchContainer;