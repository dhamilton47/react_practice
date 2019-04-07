import React from 'react';
import {fireEvent, cleanup} from 'react-testing-library';
import { expect } from 'chai';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReactDOM from 'react-dom';
import {ScoringByNumberPad} from '../components/Bowling/ScoringByNumberPad/ScoringByNumberPad';
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<ScoringByNumberPad />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('should render ScoringByNumberPad', () => {
	const wrapper = shallow(<ScoringByNumberPad/>);
	expect(wrapper.containsAllMatchingElements([
		<input />
	])).to.equal(true);
});
