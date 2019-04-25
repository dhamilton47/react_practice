import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';

import HackerNewsSearch from '../components/HackerNewsSearch/HackerNewsSearch';
import FooterContainer from '../components/HackerNewsSearch/FooterContainer';
import ItemContainer from '../components/HackerNewsSearch/ItemContainer';
import SearchContainer from '../components/HackerNewsSearch/SearchContainer';
import Item from '../components/HackerNewsSearch/Item';

Enzyme.configure({ adapter: new Adapter()});

describe('HackerNewsSearch', () => {
	it('should render without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<HackerNewsSearch/>,div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('should render SearchContainer and ItemContainer', () => {
		const wrapper = shallow(<HackerNewsSearch/>);
		expect(wrapper.containsAllMatchingElements([
			<SearchContainer/>,
			<ItemContainer/>,
			<FooterContainer/>
		])).to.equal(true);
	});
});

describe('ItemContainer', () => {
	it('should render Item', () => {
		const wrapper = shallow(<ItemContainer/>);
		expect(wrapper.containsAllMatchingElements([
			<Item/>,
		])).to.equal(true);
	});
});