import React, { Component } from 'react';
import Nav from "../Nav/Nav";
import { MainContent } from "./MainContent";

class Page extends Component {
	render() {
		return (
			<div>
				<MainContent page={this.props.page} settings={this.props.settings}/>
			</div>
		)
	}
}

export default Page;