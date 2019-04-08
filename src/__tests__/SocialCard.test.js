import React from 'react';
import { expect } from 'chai';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReactDOM from 'react-dom';
import SocialCard from '../components/SocialCard/SocialCard';
import ImageArea from '../components/SocialCard/ImageArea';
import TextArea from '../components/SocialCard/TextArea';
import { Logo } from '../components/SocialCard/Logo';
import Title from '../components/SocialCard/Title';
import { Avatar } from '../components/SocialCard/Avatar';
import Blurb from '../components/SocialCard/Blurb';
import SiteLink from '../components/SocialCard/SiteLink';
Enzyme.configure({ adapter: new Adapter() });

describe('SocialCard', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<SocialCard/>, div);
		ReactDOM.unmountComponentAtNode(div);
	});


	it('contains ImageArea and TextArea', () => {
		const wrapper=shallow(<SocialCard/>);
		expect(wrapper.containsAllMatchingElements([
			<ImageArea/>,
			<TextArea/>
		])).to.equal(true);
	});

	/*
	it('', () => {

	});
	*/
});

describe('ImageArea', () => {
	it('should contain a Title, Logo and Avatar', () => {
		const wrapper = shallow(<ImageArea/>);
		expect(wrapper.containsAllMatchingElements([
			<Logo/>,
			<Title/>,
			<Avatar/>
		])).to.equal(true);
	});

});

describe('TextArea', () => {
	it('should contain a Title, Blurb and SiteLink', () => {
		const wrapper = shallow(<TextArea/>);
		expect(wrapper.containsAllMatchingElements([
			<Title/>,
			<Blurb/>,
			<SiteLink/>
		])).to.equal(true);
	});

});