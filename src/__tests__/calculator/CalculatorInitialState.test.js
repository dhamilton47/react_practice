import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from'react-dom';

import Calculator from '../../components/Calculator/Calculator';
import Display from '../../components/Calculator/Display';
import FunctionKey from '../../components/Calculator/FunctionKey';
import NumberKey from '../../components/Calculator/NumberKey';

Enzyme.configure({ adapter: new Adapter() });

describe('Initial State', () => {
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
});