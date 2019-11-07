import React, { Component } from 'react';
import './Calculator.css';
import Display from "./Display";
import CalculatorKey from './CalculatorKey';

class Calculator extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentKey: '',
			displayText: '0',
			enteredValue: 0,
			functionKey: '',
			lastEnteredValue: 0,
			memory: 0,
			newEntryFlag: true,
			pendingFunctionFlag: false,
			previousKey: '',
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
			currentKey,
			displayText, 
//			enteredValue,
//			functionKey,
//			lastEnteredValue,
//			memory,
			newEntryFlag, 
//			pendingFunctionFlag,
//			previousKey, 
			radixPlaces
		} = this.state;

		if (newEntryFlag) {
			if (value === ".") {
				this.setState({ 
					currentKey: '.',
					displayText: '0.',
					enteredValue: '.',
					functionKey: '',
				//	lastEnteredValue: 0,
				//	memory: 0,
					newEntryFlag: false,
					previousKey: '0',
					pendingFunctionFlag: false
				});
			} else {
				displayText = String(this.round(Number(displayText.concat(value)), radixPlaces));
				this.setState({
					currentKey: value,
					displayText: displayText,
					enteredValue: value,
					functionKey: '',
				//	lastEnteredValue: 0,
				//	memory: 0,
					newEntryFlag: false,
					previousKey: currentKey,
					pendingFunctionFlag: false
				});
			}
		}

		if (!newEntryFlag) {
			if (value === '.') {
				console.log(displayText);
				if (displayText.includes('.')) {
					this.setState({
						currentKey: value,
						displayText: displayText,
						enteredValue: '',
					//	functionKey: ''
					//	lastEnteredValue: 0,
					//	memory: 0,
					//	newEntryFlag: false,
					//	pendingFunctionFlag: false,
						previousKey: currentKey,
					});
				} else {
					this.setState({
						currentKey: value,
						displayText: displayText.concat(value),
						enteredValue: value,
					//	functionKey: ''
					//	lastEnteredValue: 0,
					//	memory: 0,
					//	newEntryFlag: false,
					//	pendingFunctionFlag: false,
						previousKey: currentKey,
					});
				}
			} else {
				displayText = String(this.round(Number(displayText.concat(value)), radixPlaces));
				this.setState({
					currentKey: value,
					displayText: displayText,
					enteredValue: value,
					functionKey: '',
				//	lastEnteredValue: 0,
				//	memory: 0,
					newEntryFlag: false,
					previousKey: currentKey,
					pendingFunctionFlag: false
				});
			}
		}
		
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
//		this.diagnostics(value);
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