import {Link} from "react-router-dom";
import React from "react";

export const ListLink = props => {
	return (
		<li>
			<Link to={props.location.link}>
				{props.location.text}
			</Link>
		</li>
	);
};