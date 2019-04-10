import React, { Component } from 'react';
import './Calculator.css';
import Display from "./Display";
import FunctionKey from "./FunctionKey";
import NumberKey from "./NumberKey";


class Calculator extends Component {
	render() {
		return (
			<div className="calculator">
				<Display value={'0'}/>
				<FunctionKey styling={'btn-lg'} function={'clear'}/>
				<FunctionKey styling={'btn-sm'} function={'+'}/>
				<NumberKey styling={'btn-sm'} value={'7'}/>
				<NumberKey styling={'btn-sm'} value={'8'}/>
				<NumberKey styling={'btn-sm'} value={'9'}/>
				<FunctionKey styling={'btn-sm'} function={'-'}/>
				<NumberKey styling={'btn-sm'} value={'4'}/>
				<NumberKey styling={'btn-sm'} value={'5'}/>
				<NumberKey styling={'btn-sm'} value={'6'}/>
				<FunctionKey styling={'btn-sm'} function={'*'}/>
				<NumberKey styling={'btn-sm'} value={'1'}/>
				<NumberKey styling={'btn-sm'} value={'2'}/>
				<NumberKey styling={'btn-sm'} value={'3'}/>
				<FunctionKey styling={'btn-sm'} function={'/'}/>
				<NumberKey styling={'btn-md'} value={'0'}/>
				<NumberKey styling={'btn-sm'} value={'.'}/>
				<FunctionKey styling={'btn-sm'} function={'='}/>


			</div>
		)
	}
}

export default Calculator;