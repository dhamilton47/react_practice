import React from 'react';

import Home from "../Home/Home";
import SodaListContainer from "../SodaListContainer/SodaListContainer";
import SocialCard from "../SocialCard/SocialCard";
import Forecast from "../Forecast/Forecast";
import Calculator from "../Calculator/Calculator";
import mainContentStyle from './Content.module.css';


export const Content = props => {
	return (
		<div id="Main - Content" className={mainContentStyle.mainContent}>
			{props.page === 'home' ? <Home/> : null}
			{props.page === 'soda_list' ? <SodaListContainer/> : null}
			{props.page === 'social_card' ? <SocialCard/> : null}
			{props.page === 'forecast' ? <Forecast/> : null}
			{props.page === 'calculator' ? <Calculator/> : null}
		</div>
	)
};
