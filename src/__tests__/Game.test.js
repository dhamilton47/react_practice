import React from 'react';
import { expect } from 'chai';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReactDOM from 'react-dom';
import {Game} from '../components/Game/Game';
import {Ball} from "../components/Ball/Ball";
import {Frames} from "../components/Frames/Frames";
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Game />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render a Game', () => {
	const wrapper = shallow(<Game/>);
	expect(wrapper.containsAllMatchingElements([
		<div> </div>,
		<Frames/>
	])).to.equal(true);
});
