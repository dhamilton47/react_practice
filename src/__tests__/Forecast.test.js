import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReactDom from 'react-dom';
import Forecast from '../components/Forecast/Forecast';
import Day from '../components/Forecast/Day';
Enzyme.configure({ adapter: new Adapter() });

describe('Forecast', () => {
	it('should render without crashing', () => {
		const div = document.createElement('div');
		ReactDom.render(<Forecast/>, div);
		ReactDom.unmountComponentAtNode(div);
	});

	it('should contain component Day', () => {
		const wrapper = shallow(<Forecast/>);
		expect(wrapper.containsAllMatchingElements([
			<Day/>
		])).to.equal(true);
	});
});