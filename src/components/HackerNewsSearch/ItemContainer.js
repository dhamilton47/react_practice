import React, {Component} from 'react';
//import './Item.css';
//import Aside from './Aside';
import SortContainer from './SortContainer';
import PaginationContainer from "./PaginationContainer";
import {Items} from "./Items";
import FooterContainer from "./FooterContainer";

class ItemContainer extends Component {
	render() {
		return (
			<section className="main">

				{/*				<Aside/>*/}

				<SortContainer/>
				<Items/>
				<PaginationContainer/>
				<FooterContainer/>

			</section>
		);
	}
}

export default ItemContainer;