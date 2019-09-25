import React, { Component } from 'react';
import { MainContent } from "./MainContent";
import { MainFooter } from "./MainFooter";

class Page extends Component {
	render() {
		return (
			<div>
				<MainContent page={this.props.page} settings={this.props.settings}/>
				<MainFooter routes={this.props.settings.lists.routes}/>
			</div>
		)
	}
}

export default Page;