import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Calculator from '../../components/Calculator/Calculator'

Enzyme.configure({ adapter: new Adapter() });

describe('Calculator initial state', () => {
	it('should start with a currentKey of ""', () => {
		const wrapper = shallow(<Calculator/>);
		expect(wrapper.state().currentKey).to.equal('');
	});

	it('should start with a displayText value of "0"', () => {
		const wrapper = shallow(<Calculator/>);
		expect(wrapper.state().displayText).to.equal('0');
	});

	it('should start with a enteredValue of 0', () => {
		const wrapper = shallow(<Calculator/>);
		expect(wrapper.state().enteredValue).to.equal(0);
	});

	it('should start with functionKey equal ""', () => {
		const wrapper = shallow(<Calculator/>);
		expect(wrapper.state().functionKey).to.equal('');
	});

	it('should start with a lastEnteredValue of 0', () => {
		const wrapper = shallow(<Calculator/>);
		expect(wrapper.state().lastEnteredValue).to.equal(0);
	});

	it('should start with a memory value of 0', () => {
		const wrapper = shallow(<Calculator/>);
		expect(wrapper.state().memory).to.equal(0);
	});

	it('should start with newEntryFlag equal true', () => {
		const wrapper = shallow(<Calculator/>);
		expect(wrapper.state().newEntryFlag).to.equal(true);
	});

	it('should start with pendingFunctionFlag equal false', () => {
		const wrapper = shallow(<Calculator/>);
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
	});

	it('should start with a previousKey of ""', () => {
		const wrapper = shallow(<Calculator/>);
		expect(wrapper.state().previousKey).to.equal('');
	});

});
