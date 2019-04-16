import React, { Component } from 'react';
import './Calculator.css';
import Display from "./Display";
import FunctionKey from "./FunctionKey";
import NumberKey from "./NumberKey";

class Calculator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			memory: 0,
			enteredValue: 0,
			displayText: '0',
			newEntryFlag: true,
			pendingFunctionFlag: false,
			function: '',
			radixPlaces: 4
		};

		this.handleNumber = this.handleNumber.bind(this);
		this.handleFunction = this.handleFunction.bind(this);
	}
	diagnostics(value) {
		console.log('Button pressed: ' + value);
		console.log('New entry setting: ' + this.state.newEntryFlag);
		console.log('Displayed value: ' + this.state.displayText);
		console.log('Stored value: ' + this.state.memory);
		console.log('Pending function setting: ' + this.state.pendingFunctionFlag);
		console.log('Function: ' + this.state.function);
	}

	handleNumber(value) {
		const nEF = this.state.newEntryFlag;
		let dT = this.state.displayText;

		if (nEF) dT = String(this.round(this.state.enteredValue, 4));

		if (! (dT.includes('.') && value === '.')) {
			if (dT === '0') {
				if (value === '.') {
					this.setState({displayText: dT.concat(value)});
				} else {
					this.setState({displayText: value});
				}
			} else {
				this.setState({displayText: dT.concat(value)});
			}
		}

		if (nEF) this.setState({newEntryFlag: false});
		this.diagnostics(value);
	}

	handleFunction(value) {
		const m = this.state.memory;
		const eV = Number(this.state.displayText);

		if (this.state.pendingFunctionFlag) {
			switch (this.state.function) {
				case '+':
//					result = this.state.memory + Number(this.state.displayText);
					this.setState({
						memory: m + eV,
						enteredValue: eV,
						displayText: String(this.round(m + eV, this.state.radixPlaces)),
						pendingFunctionFlag: true,
						function: value
					});
					break;
				case '-':
					this.setState({
						memory: m - eV,
						enteredValue: eV,
						displayText: String(this.round(m - eV, this.state.radixPlaces)),
						pendingFunctionFlag: true,
						function: value
					});
					break;
				case '*':
					this.setState({
						memory: m * eV,
						enteredValue: eV,
						displayText: String(this.round(m * eV, this.state.radixPlaces)),
						pendingFunctionFlag: true,
						function: value
					});
					break;
				case '/':
					this.setState({
						memory: m / eV,
						enteredValue: eV,
						displayText: String(this.round(m / eV, this.state.radixPlaces)),
						pendingFunctionFlag: true,
						function: value
					});
					break;
				case '=':
					this.setState({
						memory: 0,
						enteredValue: eV,
						displayText: String(this.round(m, this.state.radixPlaces)),
						pendingFunctionFlag: false,
						function: ''
					});
					break;
				case 'clear':
					this.setState({
						displayText: '0',
						newEntryFlag: true
					});
					break;
				default:
			}
			this.setState({
				newEntryFlag: true
			});
		} else {
			this.setState({
				memory: eV,
				enteredValue: 0,
				newEntryFlag: true,
				pendingFunctionFlag: true,
				function: value,
//				displayText: ''
			});
		}
		this.diagnostics(value);
	/*
		this.setState({
			pendingFunction: (this.state.pendingFunction).concat(value),
			memory: Number(this.state.displayText),
			displayText: ''
		});
	 */
	}

	round(value, places) {
		const radix = 10**places;
		return Math.round(value * radix) / radix;
	}

	render() {
		return (
			<div className="calculator">
				<Display displayText={this.state.displayText}/>
				<FunctionKey
					styling={'btn-lg'}
					function={'clear'}
					onClick={() => this.handleFunction('clear')}
				/>
				<FunctionKey
					styling={'btn-sm'}
					function={'+'}
					onClick={() => this.handleFunction('+')}
				/>
				<NumberKey
					styling={'btn-sm'}
					value={'7'}
					onClick={() => this.handleNumber('7')}
				/>
				<NumberKey
					styling={'btn-sm'}
					value={'8'}
					onClick={() => this.handleNumber('8')}
				/>
				<NumberKey
					styling={'btn-sm'}
					value={'9'}
					onClick={() => this.handleNumber('9')}
				/>
				<FunctionKey
					styling={'btn-sm'}
					function={'-'}
					onClick={() => this.handleFunction('-')}
				/>
				<NumberKey
					styling={'btn-sm'}
					value={'4'}
					onClick={() => this.handleNumber('4')}
				/>
				<NumberKey
					styling={'btn-sm'}
					value={'5'}
					onClick={() => this.handleNumber('5')}
				/>
				<NumberKey
					styling={'btn-sm'}
					value={'6'}
					onClick={() => this.handleNumber('6')}
				/>
				<FunctionKey
					styling={'btn-sm'}
					function={'*'}
					onClick={() => this.handleFunction('*')}
				/>
				<NumberKey
					styling={'btn-sm'}
					value={'1'}
					onClick={() => this.handleNumber('1')}
				/>
				<NumberKey
					styling={'btn-sm'}
					value={'2'}
					onClick={() => this.handleNumber('2')}
				/>
				<NumberKey
					styling={'btn-sm'}
					value={'3'}
					onClick={() => this.handleNumber('3')}
				/>
				<FunctionKey
					styling={'btn-sm'}
					function={'/'}
					onClick={() => this.handleFunction('/')}
				/>
				<NumberKey
					styling={'btn-md'}
					value={'0'}
					onClick={() => this.handleNumber('0')}
				/>
				<NumberKey
					styling={'btn-sm'}
					value={'.'}
					onClick={() => this.handleNumber('.')}
				/>
				<FunctionKey
					styling={'btn-sm'}
					function={'='}
					onClick={() => this.handleFunction('=')}
				/>
			</div>
		)
	}
}

export default Calculator;