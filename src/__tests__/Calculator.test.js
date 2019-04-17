import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from'react-dom';

import Calculator from '../components/Calculator/Calculator';
import Display from '../components/Calculator/Display';
import FunctionKey from '../components/Calculator/FunctionKey';
import NumberKey from '../components/Calculator/NumberKey';

Enzyme.configure({ adapter: new Adapter() });

describe('Calculator', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Calculator/>, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('should render Display, FunctionKey and Number Key', () => {
		const wrapper = shallow(<Calculator/>);
		expect(wrapper.containsAllMatchingElements([
			<Display/>,
			<FunctionKey/>,
			<NumberKey/>
		]));
	});

	it('should start with a memory value of 0', () => {
		const wrapper = shallow(<Calculator/>);
		expect(wrapper.state('memory')).to.equal(0);
	});

	it('should start with a enteredValue of 0', () => {
		const wrapper = shallow(<Calculator/>);
		expect(wrapper.state('enteredValue')).to.equal(0);
	});

	it('should start with a displayText value of "0"', () => {
		const wrapper = shallow(<Calculator/>);
		expect(wrapper.state('displayText')).to.equal('0');
	});

	it('should start with newEntryFlag equal true', () => {
		const wrapper = shallow(<Calculator/>);
		expect(wrapper.state('newEntryFlag')).to.equal(true);
	});

	it('should start with pendingFunctionFlag equal false', () => {
		const wrapper = shallow(<Calculator/>);
		expect(wrapper.state('pendingFunctionFlag')).to.equal(false);
	});

	it('should start with function equal ""', () => {
		const wrapper = shallow(<Calculator/>);
		expect(wrapper.state('function')).to.equal('');
	});

	it('should display the 1 when the 1 key is clicked', () =>{
		const wrapper = shallow(<Calculator/>);
		wrapper.instance().handleNumber('1');
		expect(wrapper.state('displayText')).to.equal('1');
	});

	it('should display "0." if the display was "0" and "." is clicked', () => {
		const wrapper = shallow(<Calculator/>);
		wrapper.instance().handleNumber('.');
		expect(wrapper.state('displayText')).to.equal('0.');
	});

	it('allows only one decimal point to be entered when entering a number', () => {
		const wrapper = shallow(<Calculator/>);
		wrapper.instance().handleNumber('.');
		expect(wrapper.state('displayText')).to.equal('0.');
		wrapper.instance().handleNumber('.');
		expect(wrapper.state('displayText')).to.equal('0.');
	});
	/*
	it('passes handleClick to NumberKey', () => {
		const wrapper = shallow(<Calculator/>);
		const numberKey = wrapper.find(NumberKey).first();
		const handleNumber = wrapper.instance().handleNumber;
		expect(numberKey.prop('onClick')).to.eql(handleNumber);
	});
	*/
	it('should set the pendingFunctionFlag to true and function state to "+" when the "+" key is clicked', () => {
		const wrapper = shallow(<Calculator/>);
		wrapper.instance().handleFunction('+');
		expect(wrapper.state('pendingFunctionFlag')).to.equal(true);
		expect(wrapper.state('function')).to.equal('+');
	});

	it('should set the pendingFunctionFlag to true and function state to "-" when the "-" key is clicked', () => {
		const wrapper = shallow(<Calculator/>);
		wrapper.instance().handleFunction('-');
		expect(wrapper.state('pendingFunctionFlag')).to.equal(true);
		expect(wrapper.state('function')).to.equal('-');
	});

	it('should set the pendingFunctionFlag to true and function state to "*" when the "*" key is clicked', () => {
		const wrapper = shallow(<Calculator/>);
		wrapper.instance().handleFunction('*');
		expect(wrapper.state('pendingFunctionFlag')).to.equal(true);
		expect(wrapper.state('function')).to.equal('*');
	});

	it('should set the pendingFunctionFlag to true and function state to "/" when the "/" key is clicked', () => {
		const wrapper = shallow(<Calculator/>);
		wrapper.instance().handleFunction('/');
		expect(wrapper.state('pendingFunctionFlag')).to.equal(true);
		expect(wrapper.state('function')).to.equal('/');
	});

	it('should change the pendingFunctionFlag and function state when any of the following (+, -, *, /) are clicked', () => {
		const wrapper = shallow(<Calculator/>);
		wrapper.instance().handleFunction('+');
		expect(wrapper.state('pendingFunctionFlag')).to.equal(true);
		expect(wrapper.state('function')).to.equal('+');
	});

	it('should change the pendingFunctionFlag and function state when any of the following (+, -, *, /) are clicked', () => {
		const wrapper = shallow(<Calculator/>);
		wrapper.instance().handleFunction('+');
		expect(wrapper.state('pendingFunctionFlag')).to.equal(true);
		expect(wrapper.state('function')).to.equal('+');
	});

	it('should change the pendingFunctionFlag and function state when any of the following (+, -, *, /) are clicked', () => {
		const wrapper = shallow(<Calculator/>);
		wrapper.instance().handleFunction('+');
		expect(wrapper.state('pendingFunctionFlag')).to.equal(true);
		expect(wrapper.state('function')).to.equal('+');
	});

	it('should set memory = enteredValue when the "+" functionKey is clicked', () => {
		const wrapper = shallow(<Calculator/>);
		wrapper.instance().handleNumber('1');
		wrapper.instance().handleFunction('+');
		expect(wrapper.state('memory')).to.equal(1);
	});

	it('should set memory = enteredValue when the "-" functionKey is clicked', () => {
		const wrapper = shallow(<Calculator/>);
		wrapper.instance().handleNumber('1');
		wrapper.instance().handleFunction('-');
		expect(wrapper.state('memory')).to.equal(1);
	});

	it('should set memory = enteredValue when the "*" functionKey is clicked', () => {
		const wrapper = shallow(<Calculator/>);
		wrapper.instance().handleNumber('1');
		wrapper.instance().handleFunction('*');
		expect(wrapper.state('memory')).to.equal(1);
	});

	it('should set memory = enteredValue when the "/" functionKey is clicked', () => {
		const wrapper = shallow(<Calculator/>);
		wrapper.instance().handleNumber('1');
		wrapper.instance().handleFunction('/');
		expect(wrapper.state('memory')).to.equal(1);
	});

	it('should show the current calculated value in displayText when a functionKey is clicked', () => {
		const wrapper = shallow(<Calculator/>);
		wrapper.instance().handleNumber('1');
		wrapper.instance().handleFunction('+');
		expect(wrapper.state('displayText')).to.equal('1');
	});

	it('should add two numbers', () => {
		const wrapper = shallow(<Calculator/>);
		wrapper.instance().handleNumber('1');
		wrapper.instance().handleFunction('+');
		wrapper.instance().handleNumber('1');
		wrapper.instance().handleFunction('+');
		expect(wrapper.state('displayText')).to.equal('2');
	});

	it('should subtract two numbers', () => {
		const wrapper = shallow(<Calculator/>);
		wrapper.instance().handleNumber('1');
		wrapper.instance().handleFunction('-');
		wrapper.instance().handleNumber('1');
		wrapper.instance().handleFunction('+');
		expect(wrapper.state('displayText')).to.equal('0');
	});

	it('should multiply two numbers', () => {
		const wrapper = shallow(<Calculator/>);
		wrapper.instance().handleNumber('2');
		wrapper.instance().handleFunction('*');
		wrapper.instance().handleNumber('3');
		wrapper.instance().handleFunction('+');
		expect(wrapper.state('displayText')).to.equal('6');
	});

	it('should divide two numbers', () => {
		const wrapper = shallow(<Calculator/>);
		wrapper.instance().handleNumber('1');
		wrapper.instance().handleFunction('/');
		wrapper.instance().handleNumber('2');
		wrapper.instance().handleFunction('+');
		expect(wrapper.state('displayText')).to.equal('0.5');
	});

	it('should clear the pendingFunctionFlag state when the "=" functionKey is clicked', () => {
		const wrapper = shallow(<Calculator/>);
		wrapper.instance().handleFunction('=');
		expect(wrapper.state('pendingFunctionFlag')).to.equal(false);
	});

	it('should clear the memory state when the "=" functionKey is clicked', () => {
		const wrapper = shallow(<Calculator/>);
		wrapper.instance().handleFunction('=');
		expect(wrapper.state('memory')).to.equal(0);
	});

	it('should clear the displayText state when the "clear" functionKey is clicked', () => {
		const wrapper = shallow(<Calculator/>);
		wrapper.instance().handleFunction('clear');
		expect(wrapper.state('displayText')).to.equal('0');
	});

});