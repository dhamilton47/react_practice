import React, { Component } from 'react';
import './Calculator.css';
import { Display } from "./Display";
import { CalculatorKey } from './CalculatorKey';

class Calculator extends Component {
	state = {
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
	}

	index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
	stylesUsed = ['btn-lg', 'btn-sm', 'btn-sm', 'btn-sm', 'btn-sm', 'btn-sm', 'btn-sm', 'btn-sm', 'btn-sm', 'btn-sm', 'btn-sm', 'btn-sm', 'btn-sm','btn-sm' , 'btn-md', 'btn-sm', 'btn-sm'];
	keyNames = ['clear', '+', '7', '8', '9', '-', '4', '5', '6', '*', '1', '2', '3', '/', '0', '.', '='];
    handlerUsed = [() => this.handleFunction('clear'),
				() => this.handleFunction('+'),
				() => this.handleNumber('7'),
				() => this.handleNumber('8'),
				() => this.handleNumber('9'),
				() => this.handleFunction('-'),
				() => this.handleNumber('4'),
				() => this.handleNumber('5'),
				() => this.handleNumber('6'),
				() => this.handleFunction('*'),
				() => this.handleNumber('1'),
				() => this.handleNumber('2'),
				() => this.handleNumber('3'),
				() => this.handleFunction('/'),
				() => this.handleNumber('0'),
				() => this.handleNumber('.'),
				() => this.handleFunction('=')
			];
	
	diagnostics(value) {
		console.log('Button pressed: ' + value);
		console.log('Last entered value: ' + this.state.lastEnteredValue);
		console.log('New entry setting: ' + this.state.newEntryFlag);
		console.log('Displayed text: ' + this.state.displayText);
		console.log('Current key: ' + this.state.currentKey);
		console.log('Previous key: ' + this.state.previousKey);
		console.log('Value in memory: ' + this.state.memory);
		console.log('Pending function setting: ' + this.state.pendingFunctionFlag);
		console.log('Function key: ' + this.state.functionKey);
	}

	round(value, places) {
		const radix = 10**places;
		return Math.round(value * radix) / radix;
	}

	handleNumber = (value) => {
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
//					functionKey: '',
//					lastEnteredValue: 0,
//					memory: 0,
					newEntryFlag: false,
					previousKey: '0',
//					pendingFunctionFlag: false
				});
			} else {
				displayText = String(this.round(Number(value), radixPlaces));
				this.setState({
					currentKey: value,
					displayText: displayText,
					enteredValue: value,
//					functionKey: '',
//					lastEnteredValue: 0,
//					memory: 0,
					newEntryFlag: false,
					previousKey: currentKey,
//					pendingFunctionFlag: false
				});
			}
		}

		if (!newEntryFlag) {
			if (value === '.') {
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
//						functionKey: ''
//						lastEnteredValue: 0,
//						memory: 0,
//						newEntryFlag: false,
//						pendingFunctionFlag: false,
						previousKey: currentKey,
					});
				}
			} else {
				displayText = String(this.round(Number(displayText.concat(value)), radixPlaces));
				this.setState({
					currentKey: value,
					displayText: displayText,
					enteredValue: value,
//					functionKey: '',
//					lastEnteredValue: 0,
//					memory: 0,
					newEntryFlag: false,
					previousKey: currentKey,
//					pendingFunctionFlag: false
				});
			}
		}	
//		this.diagnostics(value);
	}

	handleFunction = (value) => {
		let {
			currentKey,
			displayText, 
			enteredValue,
			functionKey,
			lastEnteredValue,
			memory,
			newEntryFlag, 
			pendingFunctionFlag,
			previousKey, 
			radixPlaces			
		} = this.state;

		enteredValue = Number(displayText);
		lastEnteredValue = enteredValue;
		previousKey = currentKey;
		currentKey = value;
		if (pendingFunctionFlag) {
			switch (functionKey) {
				case '+':
					this.setState({
						currentKey: value,
						displayText: String(this.round(memory + enteredValue, radixPlaces)),
						enteredValue: value,
						functionKey: currentKey === "=" ? '' : value,
						lastEnteredValue: lastEnteredValue,
						memory: memory + enteredValue,
						newEntryFlag: ! newEntryFlag,
						pendingFunctionFlag: currentKey === "=" ? false : true,
						previousKey: previousKey

					});
					break;
				case '-':
					this.setState({
						currentKey: value,
						displayText: String(this.round(memory - enteredValue, radixPlaces)),
						enteredValue: value,
						functionKey: currentKey === "=" ? '' : value,
						lastEnteredValue: lastEnteredValue,
						memory: memory - enteredValue,
						newEntryFlag: ! newEntryFlag,
						pendingFunctionFlag: currentKey === "=" ? false : true,
						previousKey: previousKey

					});
					break;
				case '*':
					this.setState({
						currentKey: value,
						displayText: String(this.round(memory * enteredValue, radixPlaces)),
						enteredValue: value,
						functionKey: currentKey === "=" ? '' : value,
						lastEnteredValue: lastEnteredValue,
						memory: memory * enteredValue,
						newEntryFlag: ! newEntryFlag,
						pendingFunctionFlag: currentKey === "=" ? false : true,
						previousKey: previousKey
					});
					break;
				case '/':
					this.setState({
						currentKey: value,
						displayText: String(this.round(memory / enteredValue, radixPlaces)),
						enteredValue: value,
						functionKey: currentKey === "=" ? '' : value,
						lastEnteredValue: lastEnteredValue,
						memory: memory / enteredValue,
						newEntryFlag: ! newEntryFlag,
						pendingFunctionFlag: currentKey === "=" ? false : true,
						previousKey: previousKey
					});
					break;
				case '=':
					this.setState({
//						currentKey: value,
//						displayText: String(this.round(memory, radixPlaces)),
//						enteredValue: enteredValue,
						functionKey: '',
//						lastEnteredValue: lastEnteredValue,
//						memory: memory + lastEnteredValue,
						newEntryFlag: true,
						pendingFunctionFlag: !pendingFunctionFlag,
//						previousKey: previousKey
					});
					break;
				case 'clear':
					this.setState({
						currentKey: value,
						displayText: '0',
						enteredValue: 0,
						functionKey: value,
						lastEnteredValue: lastEnteredValue,
						memory: enteredValue,
						newEntryFlag: true,
						pendingFunctionFlag: true,
						previousKey: previousKey
					});
					break;
				default:
			}
		} else {
			this.setState({
				currentKey: value,
				displayText: displayText,
				enteredValue: value,
				functionKey: value,
				lastEnteredValue: lastEnteredValue,
				memory: lastEnteredValue,
				newEntryFlag: true,
				pendingFunctionFlag: true,
				previousKey: previousKey
			});
		}
//		this.diagnostics(value);
	}

	render() {
		return (
			<div className="calculator">
				<Display displayText={ this.state.displayText }/>
				{
					this.index.map(i => 
						<CalculatorKey 
							key={ i } 
							styling={ this.stylesUsed[i] }
							value={ this.keyNames[i] }
							onClick={ this.handlerUsed[i] }
						/>
					)
				}
			</div>
		)
	}
}

export default Calculator;