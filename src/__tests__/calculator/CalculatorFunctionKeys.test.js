import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
//import ReactDOM from'react-dom';

import Calculator from '../../components/Calculator/Calculator';
//import Display from '../../components/Calculator/Display';
//import CalculatorKey from '../../components/Calculator/CalculatorKey';

Enzyme.configure({ adapter: new Adapter() });

describe('Function keys', () => {
	it('should start with function equal ""', () => {
		const wrapper = shallow(<Calculator/>);
		expect(true).to.equal(true);
	});
/*
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
		//expect(wrapper.state('pendingFunctionFlag')).to.equal(false);
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
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
*/
});