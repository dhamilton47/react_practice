import React from 'react';
import {fireEvent, cleanup} from 'react-testing-library';
import { expect } from 'chai';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReactDOM from 'react-dom';
import Ball from '../components/Bowling/Ball/Ball';
Enzyme.configure({ adapter: new Adapter() });

describe('<Ball>', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Ball value={'X'}/>, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('should render BallButton', () => {
		const wrapper = shallow(<Ball/>);
		expect(wrapper.containsAllMatchingElements([
			<button/>
		])).to.equal(true);
	});

	it('should have props for gameID', function () {
		const wrapper = shallow(<Ball/>);
		//expect(wrapper.props().game).to.exist;
		expect(wrapper.props()).to.have.key('gameID');
		//expect(wrapper.props['gameID']).to.equal(1);
	});
});