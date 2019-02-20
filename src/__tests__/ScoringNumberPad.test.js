import React from 'react';
import {fireEvent, cleanup} from 'react-testing-library';
import { expect } from 'chai';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReactDOM from 'react-dom';
import {ScoringNumberPad} from '../components/ScoringNumberPad/ScoringNumberPad';
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<ScoringNumberPad />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('should render ScoringNumberPad', () => {
	const wrapper = shallow(<ScoringNumberPad/>);
	expect(wrapper.containsAllMatchingElements([
		<input />
	])).to.equal(true);
});
