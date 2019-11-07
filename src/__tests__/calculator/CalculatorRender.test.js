import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from'react-dom';

import Calculator from '../../components/Calculator/Calculator';
import Display from '../../components/Calculator/Display';
import CalculatorKey from '../../components/Calculator/CalculatorKey';

Enzyme.configure({ adapter: new Adapter() });

describe('Calculator', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Calculator/>, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('should render Display, FunctionKey and Number Key', () => {
		const wrapper = shallow(<Calculator/>);
		expect(wrapper.containsAllMatchingElements([
			<Display/>,
			<CalculatorKey/>
		]));
	});
});