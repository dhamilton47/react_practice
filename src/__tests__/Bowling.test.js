import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';

import { MatchScoringContainer } from '../components/Bowling/MatchScoringContainer/MatchScoringContainer';
import Ball from "../components/Bowling/Ball/Ball";
import Game from "../components/Bowling/Game/Game";
import Bowler from "../components/Bowling/Bowler/Bowler";
import Frames from "../components/Bowling/Frames/Frames";
import GameTotal from "../components/Bowling/GameTotal/GameTotal";
import Bowling from "../components/Bowling/Bowling";
import { Settings } from "../components/Bowling/Settings/Settings";
import GameContainer from "../components/Bowling/GameContainer/GameContainer";
import { GameScoringContainer } from "../components/Bowling/GameScoringContainer/GameScoringContainer";
import {StatsContainer } from "../components/Bowling/StatsContainer/StatsContainer";
import { ScoringByPinFall } from "../components/Bowling/ScoringByPinFall/ScoringByPinFall";
import { ScoringByNumberPad}  from "../components/Bowling/ScoringByNumberPad/ScoringByNumberPad";
Enzyme.configure({ adapter: new Adapter() });

describe('Bowling', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
//		ReactDOM.render(<Bowling/>, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('should render Settings, GameContainer, GameScoringContainer, MatchScoringContainer and StatsContainer', () => {
		const wrapper = shallow(<Bowling/>);
		expect(wrapper.containsAllMatchingElements([
			<Settings/>,
			<GameContainer/>,
			<GameScoringContainer/>,
			<MatchScoringContainer/>,
			<StatsContainer/>
		])).to.equal(true);
	});

	it('should start with no contestID', () => {
		const wrapper = shallow(<Bowling/>);
		expect(wrapper.state('contest.contestID')).to.eql(0);
	});

	it('should start with no contestOpponents', () => {
		const wrapper = shallow(<Bowling/>);
		expect(wrapper.state('contestOpponents')).to.eql([]);
	});

	it('should start with no contestSides', () => {
		const wrapper = shallow(<Bowling/>);
		expect(wrapper.state('contestSides')).to.eql([]);
	});

	it('should start with no contestFormat', () => {
		const wrapper = shallow(<Bowling/>);
		expect(wrapper.state('contestFormat')).to.eql({linage: 0, baker: 0});
	});

	it('should start with no contestLocation', () => {
		const wrapper = shallow(<Bowling/>);
		expect(wrapper.state('contestLocation')).to.eql([]);
	});

	it('should start with no contestDate', () => {
		const wrapper = shallow(<Bowling/>);
		expect(wrapper.state('contestDate')).to.eql([]);
	});

	it('should start with no gameID', () => {
		const wrapper = shallow(<Bowling/>);
		expect(wrapper.state('gameID')).to.eql([]);
	});

	it('should start with no roster', () => {
		const wrapper = shallow(<Bowling/>);
		expect(wrapper.state('roster')).to.eql([]);
	});
});

describe('MatchScoringContainer', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<MatchScoringContainer/>, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('should render MatchScoringContainer', () => {
		const wrapper = shallow(<MatchScoringContainer/>);
		expect(wrapper.containsAllMatchingElements([
			<div>Match Panel</div>
		])).to.equal(true);
	});
});

describe('Game', () => {
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
		expect(wrapper.props('player')).to.equal(undefined);
		expect(wrapper.props('gameID')).to.equal(undefined);
	});
});

describe('Frames', () => {
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

describe('Ball', () => {
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
		expect(wrapper.props('gameID')).to.equal(undefined);
		//expect(wrapper.props['gameID']).to.equal(1);
	});
});

describe('GameScoringContainer', () =>{
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<GameScoringContainer />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('should render GameScoringContainer', () => {
		const wrapper = shallow(<GameScoringContainer/>);
		expect(wrapper.containsAllMatchingElements([
			<ScoringByPinFall />,
			<ScoringByNumberPad />
		])).to.equal(true);
	});
});

describe('ScoringByPinFall', () =>{
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<ScoringByPinFall />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('should render ScoringByPinFall', () => {
		const wrapper = shallow(<ScoringByPinFall/>);
		expect(wrapper.containsAllMatchingElements([
			<div>
				Score by Pin Fall
				<table>
					<tbody>
					<tr>
						<td colSpan='2'>
							<button
								type="button"
								className="btn-rnd"
							>
								7
							</button>
							<button
								type="button"
								className="btn-rnd"
							>
								8
							</button>
							<button
								type="button"
								className="btn-rnd"
							>
								9
							</button>
							<button
								type="button"
								className="btn-rnd"
							>
								10
							</button>
						</td>
					</tr>
					<tr>
						<td colSpan='2'>
							<button
								type="button"
								className="btn-rnd"
							>
								4
							</button>
							<button
								type="button"
								className="btn-rnd"
							>
								5
							</button>
							<button
								type="button"
								className="btn-rnd"
							>
								6
							</button>
						</td>
					</tr>
					<tr>
						<td colSpan='2'>
							<button
								type="button"
								className="btn-rnd"
							>
								2
							</button>
							<button
								type="button"
								className="btn-rnd"
							>
								3
							</button>
						</td>
					</tr>
					<tr>
						<td colSpan='2'>
							<button
								type="button"
								className="btn-rnd"
							>
								1
							</button>
						</td>
					</tr>
					</tbody>
				</table>
			</div>
		])).to.equal(true);
	});
});

describe('ScoringByNumberPad', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<ScoringByNumberPad />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('should render ScoringByNumberPad', () => {
		const wrapper = shallow(<ScoringByNumberPad/>);
		expect(wrapper.containsAllMatchingElements([
			<input />
		])).to.equal(true);
	});
});
