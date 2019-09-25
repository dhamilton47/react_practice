import React, { Component } from 'react';

import {BrowserRouter as Router, Route} from "react-router-dom";
import Page from '../Page/Page';

import '../App/App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			settings: {
				lists: {
					routes: {
						home: {
							text: "All",
							link: "/",
							iconClassName: "",
							state: ""
						},
						soda_list: {
							text: "Soda List",
							link: "/soda_list/",
							iconClassName: "",
							state: ""
						},
						social_card: {
							text: "Social Card",
							link: "/social_card/",
							iconClassName: "",
							state: ""
						},
						forecast: {
							text: "5-Day Forecast",
							link: "/forecast/",
							iconClassName: "",
							state: ""
						},
						calculator: {
							text: "Calculator",
							link: "/calculator/",
							iconClassName: "",
							state: ""
						}
					}
				}
			}
		}
	}

	render() {
		return (
			<Router>
				<Route path="/" exact render={props => <Page page={"home"} settings={this.state.settings}/>}/>
				<Route path="/soda_list/" render={props => <Page page={"soda_list"} settings={this.state.settings}/>}/>
				<Route path="/social_card/" render={props => <Page page={"social_card"} settings={this.state.settings}/>}/>
				<Route path="/forecast/" render={props => <Page page={"forecast"} settings={this.state.settings}/>}/>
				<Route path="/calculator/" render={props => <Page page={"calculator"} settings={this.state.settings}/>}/>

			</Router>
		);
	}
}

export default App;
