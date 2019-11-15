import React from 'react';

export const CalculatorKey = ({keyInfo}) => {
//	console.log(keyInfo)
	return (
		<button
			type="button"
			className={keyInfo[1]}
			onClick={keyInfo[2]}
		>
			{keyInfo[0]}
		</button>
	);
}
