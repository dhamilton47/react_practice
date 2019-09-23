import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputArea extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
		this.setText = this.setText.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	setText(e) {
		this.setState({text: e.target.value});
	}

	handleClick() {
		this.props.onSubmit(this.state.text);
	}

	render() {
		return (
			<div>
				<input type="text" value={this.state.text} onChange={this.setText}/>
				<button onClick={this.handleClick}>Add</button>
			</div>
		);
	}
}

InputArea.propTypes = {
	onSubmit: PropTypes.func.isRequired
};

export default InputArea;