import React, { Component } from 'react';
import './Calculator.css';
import { Display } from "./Display";
import { CalculatorKey } from './CalculatorKey';

const keyNames = ['clear', '+', '7', '8', '9', '-', '4', '5', '6', '*', '1', '2', '3', '/', '0', '.', '='];

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

	createKeyParameters(value) {
		const stylesUsed = ['btn-sm','btn-md',  'btn-lg'];
		let style = stylesUsed[0]
		if (value === "clear") style = stylesUsed[2]
		if (value === "0") style = stylesUsed[1]

		let handler;
		if ("0123456789.".includes(value)) handler = () => this.handleNumber(value)
		if ("+-*/clear=".includes(value)) handler = () =>this.handleFunction(value)

		return [value, style, handler]	
	}

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
			newEntryFlag, 
			radixPlaces
		} = this.state;

		if (newEntryFlag) {
			if (value === ".") {
				this.setState({ 
					currentKey: '.',
					displayText: '0.',
					enteredValue: '.',
					newEntryFlag: false,
					previousKey: '0',
				});
			} else {
				displayText = String(this.round(Number(value), radixPlaces));
				this.setState({
					currentKey: value,
					displayText: displayText,
					enteredValue: value,
					newEntryFlag: false,
					previousKey: currentKey,
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
						previousKey: currentKey,
					});
				} else {
					this.setState({
						currentKey: value,
						displayText: displayText.concat(value),
						enteredValue: value,
						previousKey: currentKey,
					});
				}
			} else {
				displayText = String(this.round(Number(displayText.concat(value)), radixPlaces));
				this.setState({
					currentKey: value,
					displayText: displayText,
					enteredValue: value,
					newEntryFlag: false,
					previousKey: currentKey,
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

		if(value === 'clear') {
			this.setState({
//				...this.state,
				currentKey: '',
				displayText: '0',
				enteredValue: 0,
				functionKey: functionKey,
				lastEnteredValue: lastEnteredValue,
				memory: memory,
				newEntryFlag: newEntryFlag,
				pendingFunctionFlag: pendingFunctionFlag,
				previousKey: previousKey
			});
		} else if (pendingFunctionFlag) {
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
						functionKey: '',
						newEntryFlag: true,
						pendingFunctionFlag: !pendingFunctionFlag,
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
					keyNames.map(i =>
						<CalculatorKey
							key={i}
							keyInfo = { this.createKeyParameters(i) }
						/>
					)
				}
			</div>
		)
	}
}

export default Calculator;