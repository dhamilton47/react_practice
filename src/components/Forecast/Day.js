import React from 'react';

export const Day = props => {
	return (
		<div className="forecast-card">
			<div className="item1">
				{props.data.day}
			</div>

			<div className="item2">
				{props.data.condition}
			</div>

			<div className="item3">
				{props.data.high}{' '}{props.data.low}
			</div>
		</div>
	)
};
