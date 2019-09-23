import React, { Component } from 'react'
import SodaListContainer from "../SodaListContainer/SodaListContainer";
import SocialCard from "../SocialCard/SocialCard";
import Forecast from "../Forecast/Forecast";
import Calculator from "../Calculator/Calculator";

class Nav extends Component {
	render() {
		return (
			<ul>
				<li><a href={<SodaListContainer/>} title="Soda List">Soda list</a></li>
				<li><a href={<SocialCard/>} title="Social Card">Social Card</a></li>
				<li><a href={<Forecast/>} title="5-Day Forecast">5-Day Forecast</a></li>
				<li><a href={<Calculator/>} title="Calculator">Calculator</a></li>
			</ul>
		)
	}
}

export default Nav;