import React from 'react';

export const CalculatorKey = props=> {
	return (
		<button
			type="button"
			className={props.styling}
			onClick={props.onClick}
		>
			{props.value}
		</button>
	);
}
