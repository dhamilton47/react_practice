import React, { Component } from 'react';
import InputArea from './InputArea';
import SodaList from './SodaList';

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
		return <div>
			<p>This is an extremely simple page</p>
			<p>One component with 2 sub components, no CSS</p>
			<br/>
			<InputArea onSubmit={this.addItem}/>
			<SodaList items={this.state.sodas}/>
		</div>
	}
}

export default SodaListContainer;