import React from 'react';
import {fireEvent, cleanup} from 'react-testing-library';
import { expect } from 'chai';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReactDOM from 'react-dom';
import {ScoringPinFall} from '../components/ScoringPinFall/ScoringPinFall';
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<ScoringPinFall />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('should render ScoringPinFall', () => {
	const wrapper = shallow(<ScoringPinFall/>);
	expect(wrapper.containsAllMatchingElements([
		<div>X</div>
	])).to.equal(true);
});
