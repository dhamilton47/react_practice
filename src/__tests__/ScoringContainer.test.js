import React from 'react';
import {fireEvent, cleanup} from 'react-testing-library';
import { expect } from 'chai';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReactDOM from 'react-dom';
import {ScoringContainer} from '../components/ScoringContainer/ScoringContainer';
import {ScoringPinFall} from '../components/ScoringPinFall/ScoringPinFall';
import {ScoringNumberPad} from '../components/ScoringNumberPad/ScoringNumberPad';
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<ScoringContainer />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('should render ScoringContainer', () => {
	const wrapper = shallow(<ScoringContainer/>);
	expect(wrapper.containsAllMatchingElements([
		<ScoringPinFall />,
		<ScoringNumberPad />
	])).to.equal(true);
});