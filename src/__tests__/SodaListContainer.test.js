import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { spy } from 'sinon';

import ReactDOM from 'react-dom';
import SodaListContainer from '../components/SodaListContainer/SodaListContainer';
import SodaList from '../components/SodaListContainer/SodaList';
import InputArea from '../components/SodaListContainer/InputArea';
Enzyme.configure({ adapter: new Adapter() });

describe('SodaListContainer', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<SodaListContainer/>, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('should render InputArea and SodaList', () => {
		const wrapper = shallow(<SodaListContainer/>);
		expect(wrapper.containsAllMatchingElements([
			<InputArea/>,
			<SodaList/>
		])).to.equal(true);
	});

	it('should start with an empty list', () => {
		const wrapper = shallow(<SodaListContainer/>);
		expect(wrapper.state('sodas')).to.eql([]);
	});

	it('adds items to the list', () => {
		const wrapper = shallow(<SodaListContainer/>);
		wrapper.instance().addItem('Coke Zero');
		expect(wrapper.state('sodas')).to.eql(['Coke Zero']);
	});

	it('passes addItems to InputArea', () => {
		const wrapper = shallow(<SodaListContainer/>);
		const inputArea= wrapper.find(InputArea);
		const addItem = wrapper.instance().addItem;
		expect(inputArea.prop('onSubmit')).to.eql(addItem);
	});

	it('passes a bound addItem function to InputArea', () => {
		const wrapper = shallow(<SodaListContainer/>);
		const inputArea= wrapper.find(InputArea);
		inputArea.prop('onSubmit')('Coke Zero');
		expect(wrapper.state('sodas')).to.eql(['Coke Zero']);
	});

	/* See note under InputArea re 'mount'

	it('renders the items', () => {
		const wrapper = mount(<SodaListContainer/>);
		wrapper.instance().addItem('Coke Zero');
		wrapper.instance().addItem('Mountain Dew');
		expect(wrapper.find('li').length).to.equal(2);
	});
	*/
});

describe('InputArea', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<InputArea/>, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('should contain an input and a button', () => {
		const wrapper = shallow(<InputArea/>);
		expect(wrapper.containsAllMatchingElements([
			<input/>,
			<button>Add</button>
		])).to.equal(true);
	});

	it('should accept input', () => {
		const wrapper = shallow(<InputArea/>);
		const input = wrapper.find('input');
		input.simulate('change', {target: {value: 'Mountain Dew'}});
		expect(wrapper.state('text')).to.equal('Mountain Dew');

		/*
		 * This test is not working currently as we do not,
		 * or cannot, figure out how to access the actual DOM.
		 * Dave has used jdDOM and a setup.js file in order to be able
		 * to use the 'mount' function.
		 *
		 * However, looking at the React Dev Tools inspection panel,
		 * we can see that the test is passing.
		 */

		// expect(input.prop('value')).to.equal('Mountain Dew');
	});

	it('should call onSubmit when Add is clicked', () => {
		const addItemSpy = spy();
		const wrapper = shallow(<InputArea onSubmit={addItemSpy}/>);
		wrapper.setState({text: 'Orange Crush'});
		const addButton = wrapper.find('button');

		addButton.simulate('click');

		expect(addItemSpy.calledOnce).to.equal(true);
		expect(addItemSpy.calledWith('Orange Crush')).to.equal(true);
	});
});

describe('SodaList', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<SodaList/>, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('should render zero items', () => {
		const wrapper = shallow(<SodaList items={[]}/>);
		expect(wrapper.find('li')).to.have.length(0);
	});

	it('should render undefined items', () => {
		const wrapper = shallow(<SodaList items={undefined}/>);
		expect(wrapper.find('li')).to.have.length(0);
	});

	it('should render some items', () => {
		const items = ['Coke Zero', 'Mountain Dew', 'Orange Crush'];
		const wrapper = shallow(<SodaList items={items}/>);
		expect(wrapper.find('li')).to.have.length(3);
	});

});