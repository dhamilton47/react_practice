import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../components/App/App';
import GameContainer from "../components/Bowling/GameContainer/GameContainer";
import {GameScoringContainer} from "../components/Bowling/GameScoringContainer/GameScoringContainer";
import {MatchScoringContainer} from "../components/Bowling/MatchScoringContainer/MatchScoringContainer";
import {StatsContainer} from "../components/Bowling/StatsContainer/StatsContainer";
import {Settings} from "../components/Bowling/Settings/Settings";

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('should render Settings, GameContainer, GameScoringContainer, MatchScoringContainer and StatsContainer', () => {
		const wrapper = shallow(<App/>);
		expect(wrapper.containsAllMatchingElements([
			<Settings/>,
			<GameContainer/>,
			<GameScoringContainer/>,
			<MatchScoringContainer/>,
			<StatsContainer/>
		])).to.equal(true);
	});

	it('should start with no contestID', () => {
		const wrapper = shallow(<App/>);
		expect(wrapper.state('contestID')).to.eql(0);
	});

	it('should start with no contestOpponents', () => {
		const wrapper = shallow(<App/>);
		expect(wrapper.state('contestOpponents')).to.eql([]);
	});

	it('should start with no contestSides', () => {
		const wrapper = shallow(<App/>);
		expect(wrapper.state('contestSides')).to.eql([]);
	});

	it('should start with no contestFormat', () => {
		const wrapper = shallow(<App/>);
		expect(wrapper.state('contestFormat')).to.eql({linage: 0, baker: 0});
	});

	it('should start with no contestLocation', () => {
		const wrapper = shallow(<App/>);
		expect(wrapper.state('contestLocation')).to.eql([]);
	});

	it('should start with no contestDate', () => {
		const wrapper = shallow(<App/>);
		expect(wrapper.state('contestDate')).to.eql([]);
	});

	it('should start with no gameID', () => {
		const wrapper = shallow(<App/>);
		expect(wrapper.state('gameID')).to.eql([]);
	});

	it('should start with no players', () => {
		const wrapper = shallow(<App/>);
		expect(wrapper.state('players')).to.eql([]);
	});

	it('should have props for contestID', function () {
		const wrapper = shallow(<App/>);
		expect(wrapper.props().contestID).to.be.undefined;
	});
});
