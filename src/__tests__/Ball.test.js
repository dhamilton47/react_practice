import React from 'react';
import {fireEvent, cleanup} from 'react-testing-library';
import { expect } from 'chai';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReactDOM from 'react-dom';
import {Ball} from '../components/Ball/Ball';
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Ball />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it('should render BallButton', () => {
	const wrapper = shallow(<Ball/>);
	expect(wrapper.containsAllMatchingElements([
		<button>X</button>
	])).to.equal(true);
});
