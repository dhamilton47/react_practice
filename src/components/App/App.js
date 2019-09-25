import React, { Component } from 'react';

import {BrowserRouter as Router, Route} from "react-router-dom";
import Page from '../Page/Page';

import '../App/App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			routes: {
				home: {
					text: "All",
					link: "/"
				},
				soda_list: {
					text: "Soda List",
					link: "/soda_list/"
				},
				social_card: {
					text: "Social Card",
					link: "/social_card/"
				},
				forecast: {
					text: "5-Day Forecast",
					link: "/forecast/"
				},
				calculator: {
					text: "Calculator",
					link: "/calculator/"
				}
			}
		}
	}

	render() {
		return (
			<Router>
				<Route path="/" exact render={props => <Page page={"home"} routes={this.state.routes}/>}/>
				<Route path="/soda_list/" render={props => <Page page={"soda_list"} routes={this.state.routes}/>}/>
				<Route path="/social_card/" render={props => <Page page={"social_card"} routes={this.state.routes}/>}/>
				<Route path="/forecast/" render={props => <Page page={"forecast"} routes={this.state.routes}/>}/>
				<Route path="/calculator/" render={props => <Page page={"calculator"} routes={this.state.routes}/>}/>
			</Router>
		);
	}
}

export default App;
