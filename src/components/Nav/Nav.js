import React from 'react'
import navStyle from "./Nav.module.css";
import {ListLink} from "../Page/ListLink";

export const Nav = props => {
	return (
		<header id="Nav" className={navStyle.nav}>
			<ul className={navStyle.base}>
				<ListLink location={props.routes.home}/>
				<ListLink location={props.routes.soda_list}/>
				<ListLink location={props.routes.social_card}/>
				<ListLink location={props.routes.calculator}/>
				<ListLink location={props.routes.forecast}/>
			</ul>
		</header>
	);
};