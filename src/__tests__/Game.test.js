import React from 'react';
import { expect } from 'chai';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReactDOM from 'react-dom';
import Game from '../components/Game/Game';
import Bowler from "../components/Bowler/Bowler";
import Frames from "../components/Frames/Frames";
Enzyme.configure({ adapter: new Adapter() });

describe('<Game>', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Game/>, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('should render a Game', () => {
		const wrapper = shallow(<Game/>);
		expect(wrapper.containsAllMatchingElements([
			<Bowler/>,
			<Frames/>
		])).to.equal(true);
	});

	it('should have props for player and gameID', function () {
		const wrapper = shallow(<Game/>);
		expect(wrapper.props().player).to.be.undefined;
		expect(wrapper.props().gameID).to.be.undefined;
	});
});