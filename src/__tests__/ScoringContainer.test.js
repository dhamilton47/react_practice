import React from 'react';
import {fireEvent, cleanup} from 'react-testing-library';
import { expect } from 'chai';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReactDOM from 'react-dom';
import {ScoringContainer} from '../components/Bowling/GameScoringContainer/GameScoringContainer';
import {ScoringByPinFall} from '../components/Bowling/ScoringByPinFall/ScoringByPinFall';
import {ScoringByNumberPad} from '../components/Bowling/ScoringByNumberPad/ScoringByNumberPad';
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<ScoringContainer />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('should render GameScoringContainer', () => {
	const wrapper = shallow(<ScoringContainer/>);
	expect(wrapper.containsAllMatchingElements([
		<ScoringByPinFall />,
		<ScoringByNumberPad />
	])).to.equal(true);
});