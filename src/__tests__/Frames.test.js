import React from 'react';
import { expect } from 'chai';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReactDOM from 'react-dom';
import Frames from '../components/Bowling/Frames/Frames';
import Ball from "../components/Bowling/Ball/Ball";
import GameTotal from "../components/Bowling/GameTotal/GameTotal";
Enzyme.configure({ adapter: new Adapter() });

describe('<Frames>', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Frames/>, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('should render a Frame(s)', () => {
		const wrapper = shallow(<Frames/>);
		expect(wrapper.containsAllMatchingElements([
			<Ball/>,
			<GameTotal/>
		])).to.equal(true);
		/*
		expect(wrapper.containsAllMatchingElements([
			<table>
				<tbody>
				<tr>
					<td> </td>
					<td><Ball/></td>
					<td><Ball/></td>
				</tr>
				</tbody>
			</table>
		])).to.equal(true);
		*/
	});
});