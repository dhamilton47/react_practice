import React, { Component } from 'react';
import './Calculator.css';
import { Display } from "./Display";
import { CalculatorKey } from './CalculatorKey';
import { doMath } from './doMath';
import { round } from './round';

const keys = ['C','CE', '+', '7', '8', '9', '-', '4', '5', '6', 'x', '1', '2', '3', '/', '0', '.', '='];

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
		let style = 'btn-sm';
		if (value === "C" || value === "0") style = 'btn-md';

		let handler;
		if ("0123456789.".includes(value)) handler = () => this.handleNumber(value)
		if ("+-x/CE=".includes(value)) handler = () =>this.handleFunction(value)

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



	handleNumber = (value) => {
		let {
			currentKey,
			displayText, 
			newEntryFlag, 
			previousKey
		} = this.state;

		if (newEntryFlag) {
			if (value === ".") {
				displayText = '0.';
				previousKey = '0';
			} else {
				displayText = value;
				previousKey = currentKey;
			}
			return this.setState({
				currentKey: value,
				displayText: displayText,
				enteredValue: value,
				newEntryFlag: false,
				previousKey: previousKey,
			});
		}

		if (!newEntryFlag) {
			if (value === '.') {
				let enteredValue = value;
				if (displayText.includes('.')) {
					enteredValue = '';
				} else {
					displayText = displayText.concat(value);
				}
				return this.setState({
					currentKey: value,
					displayText: displayText,
					enteredValue: enteredValue,
					previousKey: currentKey,
				});
			} else {
				displayText = displayText.concat(value);
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

		if(value === 'C') {
			this.setState({
//				...this.state,
				currentKey: '',
				displayText: '0',
				enteredValue: 0,
				functionKey: '',
				lastEnteredValue: 0,
				memory: 0,
				newEntryFlag: true,
				pendingFunctionFlag: false,
				previousKey: ''
	});
		} else if(value === 'CE') {
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
			const answerValue = round(doMath(memory, enteredValue, functionKey), radixPlaces);
			const answerText = String(answerValue);
			switch (functionKey) {
				case '+':
					this.setState({
						currentKey: value,
						displayText: answerText,
						enteredValue: value,
						functionKey: currentKey === "=" ? '' : value,
						lastEnteredValue: lastEnteredValue,
						memory: answerValue,
						newEntryFlag: ! newEntryFlag,
						pendingFunctionFlag: currentKey === "=" ? false : true,
						previousKey: previousKey

					});
					break;
				case '-':
					this.setState({
						currentKey: value,
						displayText: answerText,
						enteredValue: value,
						functionKey: currentKey === "=" ? '' : value,
						lastEnteredValue: lastEnteredValue,
						memory: answerValue,
						newEntryFlag: ! newEntryFlag,
						pendingFunctionFlag: currentKey === "=" ? false : true,
						previousKey: previousKey

					});
					break;
				case 'x':
					this.setState({
						currentKey: value,
						displayText: answerText,
						enteredValue: value,
						functionKey: currentKey === "=" ? '' : value,
						lastEnteredValue: lastEnteredValue,
						memory: answerValue,
						newEntryFlag: ! newEntryFlag,
						pendingFunctionFlag: currentKey === "=" ? false : true,
						previousKey: previousKey
					});
					break;
				case '/':
					this.setState({
						currentKey: value,
						displayText: answerText,
						enteredValue: value,
						functionKey: currentKey === "=" ? '' : value,
						lastEnteredValue: lastEnteredValue,
						memory: answerValue,
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
					keys.map(key =>
						<CalculatorKey
							key={ key }
							keyInfo = { this.createKeyParameters(key) }
						/>
					)
				}
			</div>
		)
	}
}

export default Calculator;