import React from 'react';
import { expect } from 'chai';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReactDOM from 'react-dom';
import {MatchScoringContainer} from '../components/MatchScoringContainer/MatchScoringContainer';
import {Ball} from "../components/Ball/Ball";
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MatchScoringContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should render MatchScoringContainer', () => {
	const wrapper = shallow(<MatchScoringContainer/>);
	expect(wrapper.containsAllMatchingElements([
		<button>X</button>
	])).to.equal(true);
});
