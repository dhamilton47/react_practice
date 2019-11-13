import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Calculator from '../../components/Calculator/Calculator'

Enzyme.configure({ adapter: new Adapter() });

describe('Number keys', () => {
	it('should display 1 when the 1 key is clicked', () =>{
		const wrapper = shallow(<Calculator/>);
		wrapper.instance().handleNumber('1');
		expect(wrapper.state().displayText).to.equal('1');
	});

	it('should display 11 when the 1 key is clicked twice', () =>{
		const wrapper = shallow(<Calculator/>);
		wrapper.instance().handleNumber('1');
		wrapper.instance().handleNumber('1');
		expect(wrapper.state().displayText).to.equal('11');
	});


	it('should display "0." if the display was "0" and "." is clicked', () => {
		const wrapper = shallow(<Calculator/>);
		expect(wrapper.state().displayText).to.equal('0');
		wrapper.instance().handleNumber('.');
		expect(wrapper.state().displayText).to.equal('0.');
	});

	it('should display "1." if the display was "1" and "." is clicked', () => {
		const wrapper = shallow(<Calculator/>);
		wrapper.instance().handleNumber('1');
		expect(wrapper.state().displayText).to.equal('1');
		wrapper.instance().handleNumber('.');
		expect(wrapper.state().displayText).to.equal('1.');
	});
});
