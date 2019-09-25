import React, { Component } from 'react';
import { MainContent } from "./MainContent";
import { MainFooter } from "./MainFooter";

class Page extends Component {
	render() {
		return (
			<div>
				<MainContent page={this.props.page}/>
				<MainFooter routes={this.props.routes}/>
			</div>
		)
	}
}

export default Page;