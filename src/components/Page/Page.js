import React, { Component } from 'react';
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Nav } from "../Nav/Nav";

class Page extends Component {
	render() {
		return (
			<div>
				<Nav routes={this.props.routes}/>

				<Content page={this.props.page}/>
				<Footer routes={this.props.routes}/>
			</div>
		)
	}
}

export default Page;