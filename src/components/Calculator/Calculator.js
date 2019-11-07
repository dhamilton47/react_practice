import React, { Component } from 'react';
import './Calculator.css';
import Display from "./Display";
import CalculatorKey from "./CalculatorKey";
//import FunctionKey from "./FunctionKey";
//import NumberKey from "./NumberKey";

class Calculator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			memory: 0,
			enteredValue: 0,
			lastEnteredValue: 0,
			currentKey: '',
			previousKey: '',
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
		console.log('Last entered value: ' + this.state.lastEnteredValue);
		console.log('New entry setting: ' + this.state.newEntryFlag);
		console.log('Displayed value: ' + this.state.displayText);
		console.log('Current key: ' + this.state.currentKey);
		console.log('Previous key: ' + this.state.previousKey);
		console.log('Stored value: ' + this.state.memory);
		console.log('Pending function setting: ' + this.state.pendingFunctionFlag);
		console.log('Function: ' + this.state.functionKey);
	}

	handleNumber(value) {
		let { 
			displayText, 
			newEntryFlag, 
//			memory, 
//			pendingFunctionFlag, 
//			functionKey, 
//			lastEnteredValue, 
			currentKey, 
//			previousKey
		} = this.state;

		if (newEntryFlag) {
			displayText = String(this.round(Number(value), 4));
			this.setState({
			//	memory: 0,
				enteredValue: value,
			//	lastEnteredValue: 0,
				currentKey: value,
				previousKey: currentKey,
				displayText: displayText,
				newEntryFlag: false,
				pendingFunctionFlag: false,
				function: ''	
			});
		}

		if (! (displayText.includes('.') && value === '.')) {
			if (displayText === '0') {
				if (value === '.') {
					this.setState({displayText: displayText.concat(value)});
				} else {
					this.setState({displayText: value});
				}
			} else {
				this.setState({displayText: displayText.concat(value)});
			}
		}

		if (newEntryFlag) this.setState({newEntryFlag: false});
		this.diagnostics(value);
	}

	handleFunction(value) {
		const memory = this.state.memory;
		const enteredValue = Number(this.state.displayText);

		if (this.state.pendingFunctionFlag) {
			switch (this.state.function) {
				case '+':
//					result = this.state.memory + Number(this.state.displayText);
					this.setState({
						memory: memory + enteredValue,
						enteredValue: enteredValue,
						displayText: String(this.round(memory + enteredValue, this.state.radixPlaces)),
						pendingFunctionFlag: true,
						function: value
					});
					break;
				case '-':
					this.setState({
						memory: memory - enteredValue,
						enteredValue: enteredValue,
						displayText: String(this.round(memory - enteredValue, this.state.radixPlaces)),
						pendingFunctionFlag: true,
						function: value
					});
					break;
				case '*':
					this.setState({
						memory: memory * enteredValue,
						enteredValue: enteredValue,
						displayText: String(this.round(memory * enteredValue, this.state.radixPlaces)),
						pendingFunctionFlag: true,
						function: value
					});
					break;
				case '/':
					this.setState({
						memory: memory / enteredValue,
						enteredValue: enteredValue,
						displayText: String(this.round(memory / enteredValue, this.state.radixPlaces)),
						pendingFunctionFlag: true,
						function: value
					});
					break;
				case '=':
					this.setState({
						memory: 0,
						enteredValue: enteredValue,
						displayText: String(this.round(memory, this.state.radixPlaces)),
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
				memory: enteredValue,
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
				<CalculatorKey
					styling={'btn-lg'}
					value={'clear'}
					onClick={() => this.handleFunction('clear')}
				/>
				<CalculatorKey
					styling={'btn-sm'}
					value={'+'}
					onClick={() => this.handleFunction('+')}
				/>
				<CalculatorKey
					styling={'btn-sm'}
					value={'7'}
					onClick={() => this.handleNumber('7')}
				/>
				<CalculatorKey
					styling={'btn-sm'}
					value={'8'}
					onClick={() => this.handleNumber('8')}
				/>
				<CalculatorKey
					styling={'btn-sm'}
					value={'9'}
					onClick={() => this.handleNumber('9')}
				/>
				<CalculatorKey
					styling={'btn-sm'}
					value={'-'}
					onClick={() => this.handleFunction('-')}
				/>
				<CalculatorKey
					styling={'btn-sm'}
					value={'4'}
					onClick={() => this.handleNumber('4')}
				/>
				<CalculatorKey
					styling={'btn-sm'}
					value={'5'}
					onClick={() => this.handleNumber('5')}
				/>
				<CalculatorKey
					styling={'btn-sm'}
					value={'6'}
					onClick={() => this.handleNumber('6')}
				/>
				<CalculatorKey
					styling={'btn-sm'}
					value={'*'}
					onClick={() => this.handleFunction('*')}
				/>
				<CalculatorKey
					styling={'btn-sm'}
					value={'1'}
					onClick={() => this.handleNumber('1')}
				/>
				<CalculatorKey
					styling={'btn-sm'}
					value={'2'}
					onClick={() => this.handleNumber('2')}
				/>
				<CalculatorKey
					styling={'btn-sm'}
					value={'3'}
					onClick={() => this.handleNumber('3')}
				/>
				<CalculatorKey
					styling={'btn-sm'}
					value={'/'}
					onClick={() => this.handleFunction('/')}
				/>
				<CalculatorKey
					styling={'btn-md'}
					value={'0'}
					onClick={() => this.handleNumber('0')}
				/>
				<CalculatorKey
					styling={'btn-sm'}
					value={'.'}
					onClick={() => this.handleNumber('.')}
				/>
				<CalculatorKey
					styling={'btn-sm'}
					value={'='}
					onClick={() => this.handleFunction('=')}
				/>
			</div>
		)
	}
}

export default Calculator;