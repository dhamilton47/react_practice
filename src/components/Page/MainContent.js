import React from 'react';

import SodaListContainer from "../SodaListContainer/SodaListContainer";
import SocialCard from "../SocialCard/SocialCard";
import Forecast from "../Forecast/Forecast";
import Calculator from "../Calculator/Calculator";


export const MainContent = props => {
	return (
		<div>
			{props.page === 'home' ? <SodaListContainer/> : null}
			{props.page === 'soda_list' ? <SodaListContainer/> : null}
			{props.page === 'social_cards' ? <SocialCard/> : null}
			{props.page === 'forecast' ? <Forecast/> : null}
			{props.page === 'calculator' ? <Calculator/> : null}
		</div>
	)
};
