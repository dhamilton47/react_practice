import React from "react";
import { ListLink } from "./ListLink";
import { ListSeparator } from "./ListSeparator";
import footerStyle from './Footer.module.css';


export const Footer = props => {
	return (
		<footer id="Footer">
			<ul className={footerStyle.base}>
				<ListLink location={props.routes.home}/>
				<ListSeparator/>
				<ListLink location={props.routes.soda_list}/>
				<ListSeparator/>
				<ListLink location={props.routes.social_card}/>
				<ListSeparator/>
				<ListLink location={props.routes.forecast}/>
				<ListSeparator/>
				<ListLink location={props.routes.calculator}/>
			</ul>
		</footer>
	);
};