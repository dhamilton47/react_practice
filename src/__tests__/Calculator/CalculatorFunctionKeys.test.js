import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Calculator from '../../components/Calculator/Calculator'

Enzyme.configure({ adapter: new Adapter() });

describe('Calculator "+" key', () => {
	it('should set state properly during the following sequence of keys clicks "1+1="', () => {
		const wrapper = shallow(<Calculator/>);

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(0)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');
		
		wrapper.instance().handleFunction('+');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('+')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('+');

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('+');
		
		wrapper.instance().handleFunction('=');
		
		expect(wrapper.state().memory).to.equal(2)
		expect(wrapper.state().enteredValue).to.equal('=')
		expect(wrapper.state().displayText).to.equal('2')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');
	});

	it('should set state properly during the following sequence of keys clicks "1+1+1="', () => {
		const wrapper = shallow(<Calculator/>);

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(0)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');
		
		wrapper.instance().handleFunction('+');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('+')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('+');

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('+');
		
		wrapper.instance().handleFunction('+');
		
		expect(wrapper.state().memory).to.equal(2)
		expect(wrapper.state().enteredValue).to.equal('+')
		expect(wrapper.state().displayText).to.equal('2')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('+');

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(2)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('+');
		
		wrapper.instance().handleFunction('=');
		
		expect(wrapper.state().memory).to.equal(3)
		expect(wrapper.state().enteredValue).to.equal('=')
		expect(wrapper.state().displayText).to.equal('3')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');
	});

	it('should set state properly during the following sequence of keys clicks "1+1=+1="', () => {
		const wrapper = shallow(<Calculator/>);

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(0)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');
		
		wrapper.instance().handleFunction('+');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('+')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('+');

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('+');
		
		wrapper.instance().handleFunction('=');
		
		expect(wrapper.state().memory).to.equal(2)
		expect(wrapper.state().enteredValue).to.equal('=')
		expect(wrapper.state().displayText).to.equal('2')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');

		wrapper.instance().handleFunction('+');
		
		expect(wrapper.state().memory).to.equal(2)
		expect(wrapper.state().enteredValue).to.equal('+')
		expect(wrapper.state().displayText).to.equal('2')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('+');

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(2)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('+');
		
		wrapper.instance().handleFunction('=');
		
		expect(wrapper.state().memory).to.equal(3)
		expect(wrapper.state().enteredValue).to.equal('=')
		expect(wrapper.state().displayText).to.equal('3')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');
	});

	it('should set state properly during the following sequence of keys clicks "1++"', () => {
		const wrapper = shallow(<Calculator/>);

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(0)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');
		
		wrapper.instance().handleFunction('+');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('+')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('+');

		wrapper.instance().handleFunction('+');
		
		expect(wrapper.state().memory).to.equal(2)
		expect(wrapper.state().enteredValue).to.equal('+')
		expect(wrapper.state().displayText).to.equal('2')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('+');
	});
});

describe('Calculator "-" key', () => {
	it('should set state properly during the following sequence of keys clicks "1-1="', () => {
		const wrapper = shallow(<Calculator/>);

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(0)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');
		
		wrapper.instance().handleFunction('-');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('-')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('-');

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('-');
		
		wrapper.instance().handleFunction('=');
		
		expect(wrapper.state().memory).to.equal(0)
		expect(wrapper.state().enteredValue).to.equal('=')
		expect(wrapper.state().displayText).to.equal('0')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');
	});

	it('should set state properly during the following sequence of keys clicks "1-1-1="', () => {
		const wrapper = shallow(<Calculator/>);

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(0)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');
		
		wrapper.instance().handleFunction('-');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('-')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('-');

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('-');
		
		wrapper.instance().handleFunction('-');
		
		expect(wrapper.state().memory).to.equal(0)
		expect(wrapper.state().enteredValue).to.equal('-')
		expect(wrapper.state().displayText).to.equal('0')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('-');

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(0)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('-');
		
		wrapper.instance().handleFunction('=');
		
		expect(wrapper.state().memory).to.equal(-1)
		expect(wrapper.state().enteredValue).to.equal('=')
		expect(wrapper.state().displayText).to.equal('-1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');
	});

	it('should set state properly during the following sequence of keys clicks "1-1=-1="', () => {
		const wrapper = shallow(<Calculator/>);

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(0)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');
		
		wrapper.instance().handleFunction('-');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('-')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('-');

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('-');
		
		wrapper.instance().handleFunction('=');
		
		expect(wrapper.state().memory).to.equal(0)
		expect(wrapper.state().enteredValue).to.equal('=')
		expect(wrapper.state().displayText).to.equal('0')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');

		wrapper.instance().handleFunction('-');
		
		expect(wrapper.state().memory).to.equal(0)
		expect(wrapper.state().enteredValue).to.equal('-')
		expect(wrapper.state().displayText).to.equal('0')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('-');

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(0)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('-');
		
		wrapper.instance().handleFunction('=');
		
		expect(wrapper.state().memory).to.equal(-1)
		expect(wrapper.state().enteredValue).to.equal('=')
		expect(wrapper.state().displayText).to.equal('-1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');
	});

	it('should set state properly during the following sequence of keys clicks "1--"', () => {
		const wrapper = shallow(<Calculator/>);

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(0)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');
		
		wrapper.instance().handleFunction('-');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('-')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('-');

		wrapper.instance().handleFunction('-');
		
		expect(wrapper.state().memory).to.equal(0)
		expect(wrapper.state().enteredValue).to.equal('-')
		expect(wrapper.state().displayText).to.equal('0')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('-');
	});
});
	

describe('Calculator "*" key', () => {
	it('should set state properly during the following sequence of keys clicks "1*1="', () => {
		const wrapper = shallow(<Calculator/>);

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(0)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');
		
		wrapper.instance().handleFunction('*');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('*')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('*');

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('*');
		
		wrapper.instance().handleFunction('=');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('=')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');
	});

	it('should set state properly during the following sequence of keys clicks "1*1*1="', () => {
		const wrapper = shallow(<Calculator/>);

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(0)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');
		
		wrapper.instance().handleFunction('*');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('*')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('*');

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('*');
		
		wrapper.instance().handleFunction('*');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('*')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('*');

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('*');
		
		wrapper.instance().handleFunction('=');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('=')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');
	});

	it('should set state properly during the following sequence of keys clicks "1*1=*1="', () => {
		const wrapper = shallow(<Calculator/>);

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(0)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');
		
		wrapper.instance().handleFunction('*');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('*')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('*');

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('*');
		
		wrapper.instance().handleFunction('=');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('=')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');

		wrapper.instance().handleFunction('*');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('*')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('*');

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('*');
		
		wrapper.instance().handleFunction('=');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('=')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');
	});

	it('should set state properly during the following sequence of keys clicks "1**"', () => {
		const wrapper = shallow(<Calculator/>);

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(0)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');
		
		wrapper.instance().handleFunction('*');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('*')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('*');

		wrapper.instance().handleFunction('*');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('*')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('*');
	});
});
	
describe('Calculator "/" key', () => {
	it('should set state properly during the following sequence of keys clicks "1/1="', () => {
		const wrapper = shallow(<Calculator/>);

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(0)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');
		
		wrapper.instance().handleFunction('/');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('/')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('/');

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('/');
		
		wrapper.instance().handleFunction('=');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('=')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');
	});

	it('should set state properly during the following sequence of keys clicks "1/1/1="', () => {
		const wrapper = shallow(<Calculator/>);

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(0)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');
		
		wrapper.instance().handleFunction('/');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('/')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('/');

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('/');
		
		wrapper.instance().handleFunction('/');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('/')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('/');

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('/');
		
		wrapper.instance().handleFunction('=');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('=')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');
	});

	it('should set state properly during the following sequence of keys clicks "1/1=/1="', () => {
		const wrapper = shallow(<Calculator/>);

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(0)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');
		
		wrapper.instance().handleFunction('/');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('/')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('/');

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('/');
		
		wrapper.instance().handleFunction('=');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('=')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');

		wrapper.instance().handleFunction('/');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('/')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('/');

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('/');
		
		wrapper.instance().handleFunction('=');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('=')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');
	});

	it('should set state properly during the following sequence of keys clicks "1//"', () => {
		const wrapper = shallow(<Calculator/>);

		wrapper.instance().handleNumber('1');
		
		expect(wrapper.state().memory).to.equal(0)
		expect(wrapper.state().enteredValue).to.equal('1')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(false);
		expect(wrapper.state().functionKey).to.equal('');
		
		wrapper.instance().handleFunction('/');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('/')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(true)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('/');

		wrapper.instance().handleFunction('/');
		
		expect(wrapper.state().memory).to.equal(1)
		expect(wrapper.state().enteredValue).to.equal('/')
		expect(wrapper.state().displayText).to.equal('1')
		expect(wrapper.state().newEntryFlag).to.equal(false)
		expect(wrapper.state().pendingFunctionFlag).to.equal(true);
		expect(wrapper.state().functionKey).to.equal('/');
	});
});
	