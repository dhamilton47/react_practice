import React, { Component } from 'react';
import InputArea from './InputArea';
import SodaList from './SodaList';
import './SodaListContainer.css';

class SodaListContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sodas: []
		};
		this.addItem = this.addItem.bind(this);
	}

	addItem(name) {
		this.setState({sodas: [].concat(this.state.sodas).concat([name])
		});
	}

	render() {
		return (
			<div className="sodaList">
				<p>This is an extremely simple page</p>
				<p>One component with 2 sub components, no CSS</p>
				<br/>
				<InputArea onSubmit={this.addItem}/>
				<SodaList items={this.state.sodas}/>
			</div>
		)
	}
}

export default SodaListContainer;