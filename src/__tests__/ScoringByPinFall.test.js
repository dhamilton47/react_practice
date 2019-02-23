import React from 'react';
import {fireEvent, cleanup} from 'react-testing-library';
import { expect } from 'chai';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReactDOM from 'react-dom';
import {ScoringByPinFall} from '../components/ScoringByPinFall/ScoringByPinFall';
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<ScoringByPinFall />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('should render ScoringByPinFall', () => {
	const wrapper = shallow(<ScoringByPinFall/>);
	expect(wrapper.containsAllMatchingElements([
		<div>Score by Pin Fall</div>
	])).to.equal(true);
});
