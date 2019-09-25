import React from "react";
//import { ExternalLink } from "./ExternalLink";
import { ListLink } from "./ListLink";
import { ListSeparator } from "./ListSeparator";
import mainFooterStyle from './MainFooter.module.css';


export const MainFooter = props => {
	return (
		<footer id="Main - Footer">
			<ul className={mainFooterStyle.base}>
				<ListLink location={props.routes.home}/>
				<ListSeparator/>
				<ListLink location={props.routes.soda_list}/>
				<ListSeparator/>
				<ListLink location={props.routes.social_card}/>
				<ListSeparator/>
				<ListLink location={props.routes.calculator}/>
				<ListSeparator/>
				<ListLink location={props.routes.forecast}/>
			</ul>
		</footer>
	);
};